#!/usr/bin/env python3
"""
DOAJ (Directory of Open Access Journals) 数据获取和处理脚本
"""

import requests
import csv
import json
import time
from typing import Dict, Set

def fetch_doaj_via_api() -> Dict[str, dict]:
    """
    通过 DOAJ API 获取 OA 期刊列表
    注意：DOAJ API 有速率限制，建议分批获取
    """
    base_url = "https://doaj.org/api/search/journals"
    oa_journals = {}
    page = 1

    print("📥 开始从 DOAJ API 获取 OA 期刊数据...")

    while page <= 100:  # 限制最多100页，防止无限循环
        print(f"  正在获取第 {page} 页...")

        params = {
            'pageSize': 100,
            'page': page
        }

        try:
            response = requests.get(base_url, params=params, timeout=30)
            response.raise_for_status()

            data = response.json()

            if not data.get('results'):
                print(f"  ✅ 第 {page} 页没有数据，获取完成")
                break

            count = 0
            for journal in data['results']:
                bibjson = journal.get('bibjson', {})
                journal_name = bibjson.get('title', '').strip().upper()

                if journal_name:
                    # 提取 ISSN
                    issn = None
                    eissn = None

                    for identifier in bibjson.get('identifier', []):
                        if identifier.get('type') == 'issn':
                            issn = identifier.get('id')
                        elif identifier.get('type') == 'eissn':
                            eissn = identifier.get('id')

                    oa_journals[journal_name] = {
                        'is_oa': True,
                        'oa_type': '完全OA',
                        'doaj_seal': journal.get('seal', False),
                        'publisher': bibjson.get('publisher', {}).get('name', ''),
                        'issn': issn or '',
                        'eissn': eissn or ''
                    }
                    count += 1

            print(f"  ✓ 第 {page} 页获取了 {count} 个期刊")

            # 如果返回的数据少于每页数量，说明已经到最后一页
            if len(data['results']) < params['pageSize']:
                break

            page += 1
            time.sleep(1)  # 避免请求过快

        except requests.exceptions.RequestException as e:
            print(f"  ❌ 获取第 {page} 页时出错: {e}")
            break
        except Exception as e:
            print(f"  ❌ 处理第 {page} 页时出错: {e}")
            break

    print(f"\n✅ 总共获取了 {len(oa_journals)} 个 OA 期刊")
    return oa_journals


def parse_doaj_publisher_list() -> Dict[str, dict]:
    """
    使用已知的 OA 出版商列表（快速但不够准确）
    作为备用方案
    """

    # 从 DOAJ 官网统计的主要 OA 出版商
    oa_publishers_data = {
        'PUBLIC LIBRARY SCIENCE': 'PLOS',
        'BIOMED CENTRAL': 'BMC',
        'FRONTIERS MEDIA SA': 'Frontiers',
        'MDPI': 'MDPI',
        'HINDAWI': 'Hindawi',
        'COPERNICUS': 'Copernicus',
        'ELSEVIER SCIENCE INC': '混合OA',  # 有 OA 子品牌
        'WILEY': '混合OA',
        'SPRINGER': '混合OA',
        'TAYLOR & FRANCIS': '混合OA',
        'NATURE PORTFOLIO': '混合OA',
    }

    return oa_publishers_data


def generate_oa_javascript_file(oa_journals: Dict[str, dict], output_file: str):
    """
    生成 OA 期刊数据的 JavaScript 文件
    """

    output_js = f"""// DOAJ (Directory of Open Access Journals) 数据
// 数据来源: DOAJ - https://doaj.org
// 包含已认证的开放获取期刊
// 期刊数量: {len(oa_journals)}
// 更新时间: {time.strftime('%Y-%m-%d')}

const oaJournals = {json.dumps(oa_journals, indent=2, ensure_ascii=False)};
"""

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(output_js)

    print(f"✅ OA 期刊数据已保存到: {output_file}")


def main():
    """
    主函数
    """
    print("=" * 60)
    print("DOAJ OA 期刊数据获取工具")
    print("=" * 60)
    print()

    # 方法1：通过 API 获取（推荐，但需要时间）
    print("方法1：通过 DOAJ API 获取数据")
    print("  优点：数据准确、实时更新")
    print("  缺点：需要较长时间（约10-30分钟）")
    print()

    choice = input("是否使用 API 获取完整数据？(y/n): ").lower()

    if choice == 'y':
        oa_journals = fetch_doaj_via_api()

        if len(oa_journals) > 0:
            output_file = '/Users/mypro/Downloads/Journal/oa_journals.js'
            generate_oa_javascript_file(oa_journals, output_file)

            # 统计信息
            with_seal = sum(1 for j in oa_journals.values() if j.get('doaj_seal'))
            print(f"\n📊 数据统计:")
            print(f"  总 OA 期刊: {len(oa_journals)}")
            print(f"  获得 DOAJ Seal: {with_seal}")
        else:
            print("❌ 未获取到任何数据，请检查网络连接")
    else:
        print("\n方法2：使用出版商推断（备用方案）")
        print("  可以先基于出版商进行快速判断")
        print("  后续可以补充完整的 DOAJ 数据")
        print()
        print("建议：")
        print("  1. 访问 https://doaj.org/public-data-dump")
        print("  2. 下载数据转储文件")
        print("  3. 运行处理脚本生成 JavaScript 文件")


if __name__ == '__main__':
    main()
