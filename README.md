# 跨境电商数据分析理实一体化实训平台

## 项目简介

这是一个完整的跨境电商数据分析教学平台，包含：
- 4个学习模块（数据基础、选品与供应链、流量与营销、综合实战）
- 28个可下载教学资源（数据集、模板、指南、练习、教师资源）
- 21个完整教案
- 21个活页式教材
- 3个示范教学PPT

## 技术栈

- 纯HTML/CSS/JavaScript静态网站
- 无需后端服务器
- 可直接部署到Cloudflare Pages、GitHub Pages、Netlify等静态托管平台

## 本地测试

直接用浏览器打开 `index.html` 即可本地预览。

## 部署

详见《Cloudflare部署指南.md》

## 文件结构

```
├── index.html                      # 首页
├── module1.html                   # 模块一：跨境电商数据基础
├── module2.html                   # 模块二：选品与供应链分析
├── module3.html                   # 模块三：流量与营销分析
├── module4.html                   # 模块四：综合实战
├── resources.html                 # 资源中心
├── style.css                      # 全局样式
├── main.js                        # 全局JavaScript
└── resources/                    # 教学资源目录
    ├── datasets/                  # 数据集（CSV格式）
    ├── templates/                 # 报告模板（HTML格式）
    ├── guides/                    # 学习指南
    ├── exercises/                 # 练习题库
    └── teacher/                   # 教师资源
        ├── lessons/               # 21个教案
        ├── 活页式教材/           # 21个活页式教材
        └── ppt-html/             # 教学PPT（HTML格式）
```

## 作者

教学平台开发团队

## 版本

v1.0 - 2026年6月
