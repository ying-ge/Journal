# 期刊查询系统功能更新总结

## 🎉 更新内容

本次更新为期刊查询系统添加了 **SCImago Journal & Country Rank (SJR)** 指标显示功能。

### ✅ 新增功能

1. **SJR 指标集成**
   - 为 93 种高影响力期刊添加了 SJR 指标
   - 包含 SJR 值、Quartile 分区、H-index、引用数据
   - 智能显示：有数据才显示，无数据不影响其他功能

2. **增强的搜索功能**
   - ✅ 支持期刊名搜索
   - ✅ 支持首字母缩写搜索（如 JACS）
   - ✅ 支持缩写片段搜索（如 "mol can" 搜 "Molecular Cancer"）
   - ✅ 支持前缀匹配
   - ✅ 智能评分排序系统

3. **视觉优化**
   - SJR 指标以紫色渐变卡片显示
   - 清晰的分区标签（Q1/Q2/Q3/Q4）
   - 响应式设计

## 📊 数据统计

- **总期刊数**: 8,464 种
- **有 SJR 数据**: 93 种（1.1%）
- **收录期刊类型**:
  - Nature 系列期刊（20+ 种）
  - Science 系列期刊
  - Cell 系列期刊
  - 医学顶级期刊（LANCET, NEJM, JAMA等）
  - 材料科学期刊
  - 化学期刊
  - Annual Review 系列期刊

## 📁 新增文件

### 核心文件
1. **sjr_metrics.js** - SJR 指标数据（JavaScript格式）
2. **sjr_metrics_full.json** - 完整的 SJR 数据（JSON格式）

### 工具脚本
1. **build_sjr_database.py** - 从 journals.js 构建 SJR 数据库
2. **download_full_sjr.py** - 下载完整 SJR 数据
3. **download_sjr_data.py** - SJR 数据下载工具

### 文档
1. **SJR_INTEGRATION.md** - SJR 集成技术文档
2. **SJR_STATUS.md** - SJR 数据状态报告

### 修改的文件
1. **natural-science-journals.html** - 添加 SJR 显示功能
   - 新增 `loadSJRData()` 函数
   - 新增 `getSJRMetrics()` 函数
   - 更新 `displayResults()` 函数
   - 添加 SJR 卡片样式

## 🎯 使用示例

### 搜索有 SJR 数据的期刊

**输入**: `Nature`

**输出**:
```
NATURE
📊 SJR: 18.333 Q1
   H-index: 653 | 引用/文档: 22.55
顶级期刊
```

**输入**: `mol can`

**输出**:
```
MOLECULAR CANCER
📊 SJR: 6.854 Q1
   H-index: 168 | 引用/文档: 18.56
SCI Q1区C类
🔤 缩写: MC
```

### 搜索无 SJR 数据的期刊

**输入**: 任意没有 SJR 数据的期刊

**输出**:
```
[期刊名称]
[分区等级]
（正常显示，只是没有 SJR 卡片）
```

## 🛠️ 技术实现

### 数据流程
```
1. 加载期刊基础数据 (journals.js)
   ↓
2. 加载 SJR 指标数据 (sjr_metrics.js)
   ↓
3. 用户搜索期刊
   ↓
4. 匹配期刊 + 获取 SJR 指标
   ↓
5. 显示结果（如果有 SJR 数据则显示卡片）
```

### 关键函数

#### JavaScript (HTML)
```javascript
// 加载 SJR 数据
function loadSJRData()

// 获取期刊的 SJR 指标
function getSJRMetrics(journalName)

// 显示搜索结果（含 SJR 卡片）
function displayResults(results)
```

#### Python (数据构建)
```python
# 从 journals.js 提取期刊
extract_journals_from_js()

# 匹配 SJR 数据
match_journals_with_sjr()

# 保存为 JavaScript 格式
save_complete_sjr_database()
```

## 🌟 优势

1. **免费开源**
   - 使用 SCImago SJR（完全免费）
   - 无需付费 API 订阅

2. **智能显示**
   - 有数据就显示，无数据不影响使用
   - 渐进式增强功能

3. **易于扩展**
   - 可以随时添加更多期刊数据
   - 提供了数据更新脚本

4. **性能优化**
   - 本地数据，加载快速
   - 按需显示，不拖慢搜索

## 📖 数据来源

- **SCImago Journal & Country Rank**: https://www.scimagojr.com/
- **数据基础**: Scopus 数据库 (Elsevier)
- **更新频率**: 年度更新

## 🔧 如何扩展数据

### 添加单个期刊

编辑 `sjr_metrics.js`:

```javascript
"JOURNAL NAME": {
  "sjr": "数值",
  "sjr_quartile": "Q1",
  "h_index": "数值",
  "citations_per_doc": "数值"
},
```

### 批量添加

1. 从 SCImago 网站下载 CSV
2. 运行 `python3 download_full_sjr.py`
3. 自动生成 `sjr_metrics.js`

## 💡 注意事项

1. **SJR vs Impact Factor**: SJR 是基于 Scopus 的指标，与 JCR Impact Factor 不同
2. **学科差异**: 不同学科的 SJR 值差异较大，请谨慎比较
3. **数据时效性**: 指标每年更新一次，请注意数据的时效性
4. **覆盖率**: 当前覆盖 93 种期刊（主要是顶级期刊），会持续扩充

## 🚀 后续计划

- [ ] 扩充到 500+ 种期刊
- [ ] 添加更多学科的期刊
- [ ] 支持用户提交期刊数据
- [ ] 实现自动数据更新

## 📞 反馈

如有问题或建议，请：
1. 查看 `SJR_INTEGRATION.md` 技术文档
2. 查看 `SJR_STATUS.md` 数据状态
3. 提交 Issue 或 Pull Request

---

**更新日期**: 2025-12-24
**版本**: v2.0.0
**功能**: SJR 指标集成 + 缩写搜索优化
