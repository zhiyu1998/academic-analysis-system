# 极简科研分析系统

用于展示毕业设计的图像分析、时序分析的效果

## 效果图 
![home](./md-images/home.png)
![about](./md-images/about.png)

特点:
- 📦 开箱即用 | 只需更改配置文件和markdown即可成为自己的毕业设计系统
- 🏠 架构简单 | 采用`Next.js + NextUI + TailwindCSS`, 整体架构便于理解

## 使用指南

### 项目名称
极简科研分析系统可以更改为您的毕业设计名称，方便修改和答辩：
@todo

### 关于
这个页面是根据markdown文件实时渲染
1. 在`src/docs`下更改 `mine.mdx` 的内容即可实时渲染`关于`界面
![demo1](./md-images/demo1.png)
2. 更改自己想要的内容
![demo2](./md-images/demo2.png)


## 技术栈 & 架构
- Next.js
- NextUI
- TailwindCSS
- TypeScript

![architecture](./md-images/architecture.png)

## 如何安装
1. 安装依赖
```bash
yarn
```

2. 启动项目
```bash
next start
```

## 致谢
感谢以下开源项目对我Next.js的学习和对本项目的帮助:
- [someblog](https://github.com/somehq/someblog)