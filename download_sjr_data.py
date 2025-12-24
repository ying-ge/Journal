#!/usr/bin/env python3
"""
下载 SCImago Journal & Country Rank (SJR) 数据
用于获取期刊的 SJR 指标、H-index 等信息
"""

import requests
import csv
import json
import time
from urllib.parse import urljoin

# SCImago JR 基础 URL
BASE_URL = "https://www.scimagojr.com"

def download_sjr_data(year=2024):
    """
    下载指定年份的 SJR 数据

    Args:
        year: 年份，默认为 2024

    Returns:
        CSV 数据列表
    """

    # SCImago 提供的 CSV 下载链接
    # 可以按不同条件筛选
    download_urls = [
        # 所有期刊的数据
        f"{BASE_URL}/journalrank.php?out=xls",
        # 也可以添加特定国家的数据
        # f"{BASE_URL}/journalrank.php?country=US&out=xls",
        # f"{BASE_URL}/journalrank.php?country=CN&out=xls",
    ]

    print(f"正在从 SCImago JR 下载 {year} 年的期刊数据...")

    # 由于直接下载可能有限制，我们使用公开的 CSV 数据源
    # 使用已知的公开数据集
    alternative_url = "https://research.ukzn.ac.za/wp-content/uploads/2025/06/Scimagojr-SJR-Best-Quartile-2024.csv"

    try:
        print(f"尝试下载数据: {alternative_url}")
        response = requests.get(alternative_url, timeout=30)

        if response.status_code == 200:
            # 解析 CSV 数据
            csv_data = response.text.split('\n')
            reader = csv.DictReader(csv_data)

            journals = []
            for row in reader:
                if row:
                    journals.append(row)

            print(f"✓ 成功下载 {len(journals)} 条期刊记录")
            return journals
        else:
            print(f"✗ 下载失败，状态码: {response.status_code}")
            return None

    except Exception as e:
        print(f"✗ 下载出错: {e}")
        return None

def process_sjr_data(raw_data):
    """
    处理原始 SJR 数据，提取关键字段

    Args:
        raw_data: 原始 CSV 数据

    Returns:
        处理后的期刊字典 {期刊名: {SJR, H-index, ...}}
    """
    if not raw_data:
        return {}

    journal_metrics = {}

    for record in raw_data:
        # 提取期刊名称
        title = record.get('Title', '') or record.get('title', '') or record.get('Journal Name', '')

        if not title:
            continue

        # 提取关键指标
        metrics = {
            'sjr': record.get('SJR', '') or record.get('SJR (Scimago Journal Rank)', ''),
            'sjr_quartile': record.get('SJR Best Quartile', '') or record.get('Quartile', ''),
            'h_index': record.get('H index', '') or record.get('H-index', ''),
            'total_docs': record.get('Total Docs. (2024)', '') or record.get('Total Docs.', ''),
            'total_citations': record.get('Total Citations (3years)', '') or record.get('Total Citations', ''),
            'citations_per_doc': record.get('Citations / Doc. (2years)', '') or record.get('Cites per Doc.', ''),
        }

        journal_metrics[title.upper()] = metrics

    print(f"✓ 处理完成，共 {len(journal_metrics)} 种期刊指标")
    return journal_metrics

def save_to_json(data, filename='sjr_metrics.json'):
    """
    将数据保存为 JSON 格式

    Args:
        data: 期刊指标数据
        filename: 输出文件名
    """
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"✓ 数据已保存到 {filename}")
        return True
    except Exception as e:
        print(f"✗ 保存失败: {e}")
        return False

def load_from_json(filename='sjr_metrics.json'):
    """
    从 JSON 文件加载数据

    Args:
        filename: 输入文件名

    Returns:
        期刊指标数据
    """
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            data = json.load(f)
        print(f"✓ 从 {filename} 加载了 {len(data)} 条记录")
        return data
    except FileNotFoundError:
        print(f"✗ 文件不存在: {filename}")
        return None
    except Exception as e:
        print(f"✗ 加载失败: {e}")
        return None

def create_sample_data():
    """
    创建示例数据（用于演示）
    包含一些常见期刊的 SJR 指标
    """
    sample_data = {
        "NATURE": {
            "sjr": "18.333",
            "sjr_quartile": "Q1",
            "h_index": "653",
            "total_docs": "680",
            "total_citations": "35907",
            "citations_per_doc": "22.55"
        },
        "SCIENCE": {
            "sjr": "16.842",
            "sjr_quartile": "Q1",
            "h_index": "728",
            "total_docs": "543",
            "total_citations": "28456",
            "citations_per_doc": "20.89"
        },
        "CELL": {
            "sjr": "22.612",
            "sjr_quartile": "Q1",
            "h_index": "925",
            "total_docs": "537",
            "total_citations": "44520",
            "citations_per_doc": "30.22"
        },
        "JOURNAL OF THE AMERICAN CHEMICAL SOCIETY": {
            "sjr": "8.256",
            "sjr_quartile": "Q1",
            "h_index": "538",
            "total_docs": "1245",
            "total_citations": "12456",
            "citations_per_doc": "8.45"
        },
        "ADVANCED MATERIALS": {
            "sjr": "12.547",
            "sjr_quartile": "Q1",
            "h_index": "412",
            "total_docs": "876",
            "total_citations": "15342",
            "citations_per_doc": "15.23"
        },
        "MOLECULAR CANCER": {
            "sjr": "6.854",
            "sjr_quartile": "Q1",
            "h_index": "168",
            "total_docs": "234",
            "total_citations": "5634",
            "citations_per_doc": "18.56"
        },
        "LANCET": {
            "sjr": "19.076",
            "sjr_quartile": "Q1",
            "h_index": "1231",
            "total_docs": "1282",
            "total_citations": "81934",
            "citations_per_doc": "18.37"
        },
        "NEW ENGLAND JOURNAL OF MEDICINE": {
            "sjr": "19.076",
            "sjr_quartile": "Q1",
            "h_index": "1231",
            "total_docs": "1282",
            "total_citations": "81934",
            "citations_per_doc": "18.37"
        },
        "ANNUAL REVIEW OF BIOCHEMISTRY": {
            "sjr": "15.234",
            "sjr_quartile": "Q1",
            "h_index": "268",
            "total_docs": "45",
            "total_citations": "8456",
            "citations_per_doc": "25.67"
        }
    }

    return sample_data

def main():
    """主函数"""
    print("=" * 60)
    print("SCImago Journal & Country Rank 数据下载工具")
    print("=" * 60)
    print()

    # 选项 1: 尝试下载在线数据
    # sjr_data = download_sjr_data()

    # 选项 2: 创建示例数据（用于演示）
    print("创建示例期刊指标数据...")
    sjr_data = create_sample_data()

    if sjr_data:
        # 保存为 JSON
        save_to_json(sjr_data, 'sjr_metrics.json')

        # 显示一些示例
        print("\n示例数据预览:")
        print("-" * 60)
        for i, (journal, metrics) in enumerate(list(sjr_data.items())[:3]):
            print(f"\n{journal}:")
            for key, value in metrics.items():
                print(f"  {key}: {value}")

        print(f"\n{'-' * 60}")
        print(f"✓ 总共 {len(sjr_data)} 种期刊")

    return sjr_data

if __name__ == "__main__":
    main()
