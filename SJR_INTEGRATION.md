# 期刊指标系统集成文档

## 📊 功能概述

本系统已成功集成 **SCImago Journal & Country Rank (SJR)** 数据，为期刊查询添加了权威的学术评价指标。

## ✨ 新增功能

### 1. SJR 指标显示
每个搜索结果现在包含：
- **SJR (SCImago Journal Rank)**: 期刊影响力排名指标
- **SJR Quartile**: 期刊分区（Q1-Q4）
- **H-index**: 期刊的 H 指数
- **Citations per Document**: 每篇文档的平均引用数

### 2. 视觉设计
SJR 指标以精美的渐变卡片形式展示，包含：
- 紫色渐变背景
- 白色文字，清晰易读
- 分区标签（Q1/Q2/Q3/Q4）
- H-index 和引用数据

## 📚 数据来源

### SCImago Journal & Country Rank
- **官网**: https://www.scimagojr.com/
- **数据基础**: Scopus 数据库 (Elsevier)
- **覆盖范围**: 31,136+ 种期刊
- **更新频率**: 年度更新

### 为什么选择 SJR？
1. ✅ **完全免费开放** - 无需付费订阅
2. ✅ **权威性高** - 基于 Scopus 数据库
3. ✅ **数据丰富** - 包含多种评价指标
4. ✅ **持续更新** - 每年定期更新
5. ✅ **易于获取** - 提供公开数据下载

## 🔍 使用方法

### 示例搜索

#### 1. 按期刊名搜索
```
输入: Nature
显示: 期刊信息 + SJR 指标 (18.333 Q1)
```

#### 2. 按缩写搜索
```
输入: jacs
显示: JOURNAL OF THE AMERICAN CHEMICAL SOCIETY + SJR 指标
```

#### 3. 按缩写片段搜索
```
输入: mol can
显示: MOLECULAR CANCER + SJR 指标 (6.854 Q1)
```

## 📁 文件结构

```
Journal/
├── natural-science-journals.html    # 自然科学期刊查询页面
├── social-science-journals.html     # 人文社科期刊查询页面
├── journals.js                      # 期刊基础数据
├── sjr_metrics.js                  # SJR 指标数据 ⭐ 新增
├── sjr_metrics.json                # SJR 原始数据（JSON 格式）
├── download_sjr_data.py            # 数据下载脚本 ⭐ 新增
└── index.html                       # 首页
```

## 🛠️ 技术实现

### 数据加载流程

```javascript
1. 加载期刊基础数据
   ↓
2. 加载 SJR 指标数据 (sjr_metrics.js)
   ↓
3. 搜索时匹配期刊名称
   ↓
4. 获取对应期刊的 SJR 指标
   ↓
5. 在结果中显示指标卡片
```

### 关键函数

#### `loadSJRData()`
加载 SJR 指标数据到内存

#### `getSJRMetrics(journalName)`
获取指定期刊的 SJR 指标

#### `displayResults(results)`
显示搜索结果，包含 SJR 指标卡片

## 🎨 样式设计

### SJR 指标卡片
```css
.sjr-metrics {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 8px 12px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(102, 126, 234, 0.2);
}
```

### 颜色方案
- **背景**: 紫色渐变 (#667eea → #764ba2)
- **文字**: 白色 (#fff)
- **分区标签**: 半透明白色

## 📊 示例数据

当前系统包含以下期刊的 SJR 指标：

| 期刊名称 | SJR | Quartile | H-index |
|---------|-----|----------|---------|
| NATURE | 18.333 | Q1 | 653 |
| SCIENCE | 16.842 | Q1 | 728 |
| CELL | 22.612 | Q1 | 925 |
| LANCET | 19.076 | Q1 | 1231 |
| ADVANCED MATERIALS | 12.547 | Q1 | 412 |
| MOLECULAR CANCER | 6.854 | Q1 | 168 |

## 🔄 数据更新

### 更新方法

#### 方法 1: 使用下载脚本
```bash
python3 download_sjr_data.py
```

#### 方法 2: 手动更新
1. 访问 https://www.scimagojr.com/journalrank.php
2. 筛选需要的期刊
3. 下载 CSV/XLS 数据
4. 转换为 JavaScript 格式
5. 更新 `sjr_metrics.js`

### 数据频率
- **SCImago 更新**: 每年一次
- **建议更新频率**: 每年或每半年

## 🌟 未来改进方向

1. **扩充数据集**
   - 添加更多期刊的 SJR 指标
   - 覆盖更多学科领域

2. **实时数据获取**
   - 集成 SCImago API（如果可用）
   - 自动化数据更新流程

3. **指标对比功能**
   - 支持多个期刊指标对比
   - 生成对比图表

4. **历史趋势**
   - 显示 SJR 历史变化
   - 预测趋势分析

## 📖 相关链接

- [SCImago Journal & Country Rank](https://www.scimagojr.com/)
- [Scopus 数据库](https://www.scopus.com/)
- [SJR 说明文档](https://www.scimagojr.com/aboutus.php)

## 💡 注意事项

1. **数据准确性**: SJR 数据来自 Scopus，可能与 JCR Impact Factor 不同
2. **更新频率**: 指标每年更新一次，请注意数据的时效性
3. **学科差异**: 不同学科的 SJR 值差异较大，请谨慎比较

---

**创建日期**: 2025-12-24
**最后更新**: 2025-12-24
**版本**: v1.0.0
