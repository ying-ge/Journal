# 期刊查询系统

基于中科院JCR分区与卓越行动计划的期刊评价目录查询工具，提供快速便捷的期刊水平查询服务。

## 功能特性

- **自然科学类期刊查询**：涵盖 SCI 分区期刊（顶级期刊、Q1-Q3区等）
- **人文社科类期刊查询**：涵盖 SSCI 分区期刊（Q1-Q4区）
- **模糊搜索**：支持部分关键词快速匹配
- **分类浏览**：点击图例可查看该分类下的所有期刊

## 数据统计

- 期刊总数：11,987 种
- 自然科学类：8,464 种
- 人文社科类：3,523 种

## 本地运行

由于浏览器安全限制，需要通过 HTTP 服务器运行：

```bash
# Python 3
python3 -m http.server 8000

# 或使用 Python 2
python -m SimpleHTTPServer 8000
```

然后在浏览器中访问：`http://localhost:8000`

## 项目结构

```
Journal/
├── index.html                      # 首页
├── natural-science-journals.html   # 自然科学类期刊查询
├── social-science-journals.html    # 人文社科类期刊查询
├── journals.js                     # 自然科学类期刊数据（8,464种）
└── art-journals.js                 # 人文社科类期刊数据（3,523种）
```

## 数据来源

- 中科院 JCR 分区数据
- 中国科技期刊卓越行动计划
