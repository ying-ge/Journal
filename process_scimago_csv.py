#!/usr/bin/env python3
"""
从 SCImago CSV 文件处理完整的期刊 SJR 数据
"""

import csv
import json
import re
from typing import Dict, Set
import sys

def clean_journal_name(name: str) -> str:
    """清理期刊名称，统一格式"""
    if not name:
        return ""
    # 移除引号
    name = name.strip('"').strip()
    # 转换为大写
    name = name.upper()
    # 移除多余空格
    name = ' '.join(name.split())
    return name

def load_scimago_csv(filename: str) -> Dict:
    """加载 SCImago CSV 文件"""
    print(f"正在读取 {filename}...")

    journals = {}

    try:
        # CSV 使用分号分隔
        with open(filename, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f, delimiter=';')

            for row in reader:
                # 提取期刊名称
                title = row.get('Title', '')
                if not title:
                    continue

                clean_name = clean_journal_name(title)

                # 提取 SJR 相关数据
                sjr_value = row.get('SJR', '0').replace(',', '.').strip()
                quartile = row.get('SJR Best Quartile', '').strip()
                total_docs = row.get('Total Docs. (2024)', '0').strip()

                # 只保留有 SJR 值的期刊
                if sjr_value and sjr_value != '0' and float(sjr_value) > 0:
                    journals[clean_name] = {
                        'sjr': sjr_value,
                        'sjr_quartile': quartile,
                        'total_docs': total_docs,
                        'publisher': row.get('Publisher', '').strip('"'),
                        'issn': row.get('Issn', '').strip('"'),
                        'type': row.get('Type', '').strip('"'),
                        'rank': row.get('Rank', '0').strip(),
                    }

        print(f"✓ 成功加载 {len(journals)} 种期刊的 SJR 数据")
        return journals

    except FileNotFoundError:
        print(f"✗ 文件不存在: {filename}")
        return {}
    except Exception as e:
        print(f"✗ 读取失败: {e}")
        import traceback
        traceback.print_exc()
        return {}

def load_existing_journals(filename='journals.js') -> Set[str]:
    """从 journals.js 提取所有期刊名称"""
    print(f"\n正在从 {filename} 提取期刊名称...")

    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()

        # 提取期刊名称
        pattern = r'"name":\s*"([^"]+)"'
        matches = re.findall(pattern, content)

        journals = set()
        for match in matches:
            clean_name = clean_journal_name(match)
            journals.add(clean_name)

        print(f"✓ 提取了 {len(journals)} 种期刊")
        return journals

    except Exception as e:
        print(f"✗ 读取失败: {e}")
        return set()

def match_journals_with_sjr(journal_set: Set[str], sjr_data: Dict) -> Dict:
    """匹配期刊与 SJR 数据"""
    print("\n正在匹配期刊与 SJR 数据...")

    matched = {}
    unmatched = []

    # 先尝试直接匹配
    for journal in journal_set:
        if journal in sjr_data:
            matched[journal] = sjr_data[journal]
            continue

        # 尝试清理后匹配
        journal_clean = re.sub(r'[^\w\s]', '', journal).strip()
        found = False

        for sjr_journal, metrics in sjr_data.items():
            sjr_clean = re.sub(r'[^\w\s]', '', sjr_journal).strip()
            if journal_clean == sjr_clean:
                matched[journal] = metrics
                found = True
                break

        if not found:
            unmatched.append(journal)

    print(f"✓ 匹配成功: {len(matched)} 种期刊")
    print(f"✗ 未匹配: {len(unmatched)} 种期刊")

    if unmatched:
        print(f"\n未匹配的期刊示例（前20个）:")
        for j in unmatched[:20]:
            print(f"  - {j}")

    return matched

def save_to_js(data: Dict, filename='sjr_metrics.js'):
    """保存为 JavaScript 格式"""
    print(f"\n正在保存到 {filename}...")

    js_content = """// SCImago Journal & Country Rank (SJR) 指标数据
// 数据来源: scimago journal value 2024.csv
// 包含期刊的 SJR、Quartile 等指标
// 更新日期: 2025-12-24

const sjrMetrics = {
"""

    # 按期刊名排序
    sorted_journals = sorted(data.keys())

    for journal in sorted_journals:
        metrics = data[journal]
        js_content += f'  "{journal}": {{\n'
        js_content += f'    "sjr": "{metrics["sjr"]}",\n'
        js_content += f'    "sjr_quartile": "{metrics["sjr_quartile"]}",\n'
        js_content += f'    "total_docs": "{metrics["total_docs"]}"'
        if metrics.get('h_index'):
            js_content += f',\n    "h_index": "{metrics["h_index"]}"\n'
        else:
            js_content += '\n'
        js_content += '  },\n'

    js_content = js_content.rstrip(',\n') + '\n'
    js_content += '};\n'

    try:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(js_content)
        print(f"✓ 已保存 {len(data)} 种期刊的 SJR 数据")
        return True
    except Exception as e:
        print(f"✗ 保存失败: {e}")
        return False

def save_statistics(matched: Dict, sjr_data: Dict):
    """保存统计信息"""
    print("\n" + "=" * 70)
    print("数据统计")
    print("=" * 70)

    # 按分区统计
    quartile_counts = {}
    sjr_ranges = {
        'Q1': [0, 0],
        'Q2': [0, 0],
        'Q3': [0, 0],
        'Q4': [0, 0],
    }

    for journal, metrics in matched.items():
        q = metrics.get('sjr_quartile', 'Unknown')
        quartile_counts[q] = quartile_counts.get(q, 0) + 1

        if q in sjr_ranges:
            sjr_value = float(metrics['sjr'])
            sjr_ranges[q][0] = min(sjr_ranges[q][0], sjr_value) if sjr_ranges[q][0] > 0 else sjr_value
            sjr_ranges[q][1] = max(sjr_ranges[q][1], sjr_value)

    print(f"\n总匹配期刊数: {len(matched)}")
    print(f"SJR 数据库总期刊数: {len(sjr_data)}")

    print("\n按分区统计:")
    for q in ['Q1', 'Q2', 'Q3', 'Q4']:
        count = quartile_counts.get(q, 0)
        if count > 0 and q in sjr_ranges:
            min_sjr, max_sjr = sjr_ranges[q]
            print(f"  {q}: {count:4d} 种期刊 (SJR: {min_sjr:.3f} - {max_sjr:.3f})")
        elif count > 0:
            print(f"  {q}: {count:4d} 种期刊")

    # 显示一些高影响力期刊
    print("\n高影响力期刊示例 (SJR > 20):")
    high_impact = [(j, m) for j, m in matched.items() if float(m['sjr']) > 20]
    high_impact.sort(key=lambda x: float(x[1]['sjr']), reverse=True)
    for journal, metrics in high_impact[:10]:
        print(f"  {journal}")
        print(f"    SJR: {metrics['sjr']} | {metrics['sjr_quartile']}")

    print("\n" + "=" * 70)

def main():
    """主函数"""
    print("=" * 70)
    print("处理 SCImago SJR 数据")
    print("=" * 70)
    print()

    # 1. 加载 SCImago CSV
    sjr_data = load_scimago_csv('scimago journal value 2024.csv')

    if not sjr_data:
        print("无法加载 SCImago 数据，退出。")
        return

    # 2. 从 journals.js 提取期刊
    existing_journals = load_existing_journals('journals.js')

    if not existing_journals:
        print("无法提取期刊列表，退出。")
        return

    # 3. 匹配数据
    matched = match_journals_with_sjr(existing_journals, sjr_data)

    # 4. 保存结果
    if matched:
        save_to_js(matched)

        # 5. 显示统计
        save_statistics(matched, sjr_data)

        # 也保存完整的 SJR 数据（所有期刊）
        print(f"\n正在保存完整 SJR 数据库...")
        save_to_js(sjr_data, 'sjr_metrics_full_all.js')
        print(f"✓ 完整数据库已保存到 sjr_metrics_full_all.js")

if __name__ == "__main__":
    main()
