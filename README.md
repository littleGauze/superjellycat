# 果冻猫侠工作室官网 (SuperJellyCat)

一个使用 Vue 3 + TypeScript 构建的现代化游戏厂商官网，参考米哈游的设计风格。

## 🎮 项目特色

- **现代化设计**: 采用渐变色彩和毛玻璃效果，营造科技感
- **响应式布局**: 完美适配桌面端、平板和移动设备
- **流畅动画**: 丰富的过渡动画和交互效果
- **TypeScript**: 完整的类型支持，提高代码质量
- **组件化架构**: 可复用的组件设计

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

项目将在 `http://localhost:3000` 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
src/
├── components/          # 组件目录
│   └── Layout/         # 布局组件
│       ├── Header.vue  # 头部导航
│       ├── Footer.vue  # 页脚
│       └── Layout.vue  # 主布局
├── views/              # 页面组件
│   ├── Home.vue        # 首页
│   ├── Products.vue    # 产品页
│   ├── About.vue       # 关于我们
│   └── Contact.vue     # 联系我们
├── router/             # 路由配置
├── style.css           # 全局样式
├── main.ts            # 入口文件
└── App.vue            # 根组件
```

## 🎨 设计系统

### 色彩方案

- **主色调**: 果冻紫 (jelly-500: #dd57ff)
- **背景色**: 深灰色系 (gray-900, gray-800)
- **文字色**: 白色和灰色系

### 组件样式

- `btn-primary`: 主要按钮样式
- `btn-secondary`: 次要按钮样式
- `card`: 卡片容器样式
- `gradient-text`: 渐变文字效果

## 📱 页面功能

### 首页 (Home)
- 英雄区域展示
- 特色介绍
- 最新游戏预览

### 产品页 (Products)
- 主打游戏详细介绍
- 游戏画廊
- 即将发布的游戏

### 关于我们 (About)
- 公司故事
- 团队介绍
- 价值观展示
- 成就统计

### 联系我们 (Contact)
- 联系表单
- 联系信息
- 常见问题

## 🛠️ 技术栈

- **Vue 3**: 渐进式 JavaScript 框架
- **TypeScript**: JavaScript 的超集
- **Vite**: 快速的前端构建工具
- **Vue Router**: 官方路由管理器
- **Pinia**: Vue 状态管理库
- **Tailwind CSS**: 实用优先的 CSS 框架
- **@vueuse/core**: Vue 组合式 API 工具集

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**果冻猫侠工作室** - 创造精彩游戏体验 🎮✨
