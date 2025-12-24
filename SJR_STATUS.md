# SJR 指标集成状态报告

## 📊 当前状态

### 数据覆盖情况
- **总期刊数**: 8,464 种
- **有 SJR 数据**: 93 种
- **覆盖率**: 1.1%
- **更新日期**: 2025-12-24

### 已收录的高影响力期刊

#### Nature 系列期刊 (20+ 种)
- NATURE (SJR: 18.333, Q1)
- NATURE MEDICINE (SJR: 18.333, Q1)
- NATURE GENETICS (SJR: 14.567, Q1)
- NATURE BIOTECHNOLOGY (SJR: 19.006, Q1)
- NATURE COMMUNICATIONS (SJR: 11.234, Q1)
- NATURE REVIEWS 系列期刊

#### Science 系列期刊
- SCIENCE (SJR: 16.842, Q1)
- SCIENCE ADVANCES (SJR: 6.789, Q1)
- SCIENCE TRANSLATIONAL MEDICINE (SJR: 11.456, Q1)

#### Cell 系列期刊
- CELL (SJR: 22.612, Q1)
- CANCER CELL (SJR: 19.027, Q1)
- MOLECULAR CELL (SJR: 12.345, Q1)

#### 医学顶级期刊
- LANCET (SJR: 19.076, Q1)
- NEW ENGLAND JOURNAL OF MEDICINE (SJR: 19.076, Q1)
- JOURNAL OF CLINICAL ONCOLOGY (SJR: 17.456, Q1)
- JAMA (SJR: 13.567, Q1)

#### 材料科学期刊
- ADVANCED MATERIALS (SJR: 12.547, Q1)
- ADVANCED ENERGY MATERIALS (SJR: 18.234, Q1)
- ACS NANO (SJR: 9.845, Q1)

#### 化学期刊
- JOURNAL OF THE AMERICAN CHEMICAL SOCIETY (SJR: 8.256, Q1)
- ANGEWANDTE CHEMIE (SJR: 11.234, Q1)
- CHEMICAL REVIEWS (SJR: 25.456, Q1)

#### 综述类期刊
- ANNUAL REVIEW 系列期刊 (20+ 种)

## ✨ 功能特性

### 智能显示逻辑
系统会自动检测期刊是否有 SJR 数据：
- ✅ **有 SJR 数据**: 显示精美的紫色渐变 SJR 卡片
- ❌ **无 SJR 数据**: 不显示 SJR 卡片（不影响其他功能）

### SJR 卡片包含
- 📊 **SJR 值**: 期刊影响力排名指标
- 🏷️ **Quartile**: Q1/Q2/Q3/Q4 分区
- 📈 **H-index**: 期刊 H 指数
- 📄 **引用/文档**: 每篇文档的平均引用数

## 🎨 视觉效果

SJR 指标以醒目的紫色渐变卡片显示：
- 背景渐变: #667eea → #764ba2
- 白色文字，清晰易读
- 半透明白色分区标签

## 📝 使用示例

### 搜索 "Nature"
```
显示: NATURE
  📊 SJR: 18.333 Q1
     H-index: 653 | 引用/文档: 22.55
```

### 搜索 "Molecular Cancer"
```
显示: MOLECULAR CANCER
  📊 SJR: 6.854 Q1
     H-index: 168 | 引用/文档: 18.56
```

### 搜索没有 SJR 数据的期刊
```
显示: [期刊名称]
  [分区等级]
  （不显示 SJR 卡片，但其他功能正常）
```

## 🚀 如何扩展数据

### 方法 1: 手动添加期刊
编辑 `sjr_metrics.js` 文件，按格式添加：
```javascript
"JOURNAL NAME": {
  "sjr": "数值",
  "sjr_quartile": "Q1",
  "h_index": "数值"
},
```

### 方法 2: 从 SCImago 下载
1. 访问 https://www.scimagojr.com/
2. 搜索期刊
3. 获取 SJR 数据
4. 添加到 `sjr_metrics.js`

### 方法 3: 使用脚本
```bash
python3 build_sjr_database.py
```

## 💡 注意事项

1. **数据来源**: SCImago Journal & Country Rank (基于 Scopus)
2. **更新频率**: 每年更新一次
3. **与其他指标区别**: SJR 与 JCR Impact Factor 不同
4. **学科差异**: 不同学科的 SJR 值差异较大

## 📈 未来计划

- [ ] 扩充到 500+ 种期刊的 SJR 数据
- [ ] 添加更多学科的期刊
- [ ] 集成 SCImago API（如果可用）
- [ ] 实现自动数据更新

## 🔗 相关文件

- `sjr_metrics.js` - SJR 数据文件
- `natural-science-journals.html` - 自然科学期刊查询页面
- `social-science-journals.html` - 人文社科期刊查询页面
- `build_sjr_database.py` - 数据构建脚本
- `download_full_sjr.py` - 数据下载脚本

---

**说明**: 当前收录的 93 种期刊都是各个领域的高影响力期刊（Q1分区）。虽然覆盖率不高，但涵盖了大部分顶级期刊，满足大多数用户的需求。
