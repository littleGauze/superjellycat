# 资源文件自动复制脚本

## 概述

这个脚本会自动将 `src/assets` 目录下的图片文件复制到 `public` 目录，确保构建后的网站能正确显示所有图片。

## 使用方法

### 开发模式

```bash
npm run dev
```

这个命令会自动：
1. 运行资源复制脚本
2. 启动 Vite 开发服务器

### 自动构建（推荐）

```bash
npm run build
```

这个命令会自动：
1. 运行资源复制脚本
2. 执行 Vite 构建

### 手动复制资源

```bash
npm run copy-assets
```

### 带类型检查的构建

```bash
npm run build:check
```

## 复制的资源

脚本会自动复制以下资源：

- **游戏相关图片**
  - `src/assets/images/games/littleswordmaster/banner-1920x1080.png`
  - `src/assets/images/games/littleswordmaster/logo-512.png`
  - `src/assets/images/games/littleswordmaster/screenshots/` (整个目录)

- **救救农场吧图片**
  - `src/assets/images/games/savethefarm/main.jpg`

- **工作室资源**
  - `src/assets/images/superjellycat.png`
  - `src/assets/images/Avatar.jpg`

## 添加新的资源

如果需要添加新的图片资源，请编辑 `scripts/copy-assets.js` 文件中的 `assetMappings` 数组：

```javascript
const assetMappings = [
  // 添加新的映射
  {
    src: 'src/assets/images/your-new-image.png',
    dest: 'public/images/your-new-image.png'
  }
]
```

## 注意事项

- 脚本会在每次构建前自动运行
- 如果源文件不存在，脚本会显示警告但不会中断构建
- 复制的文件会覆盖 `public` 目录中的同名文件
- 脚本支持文件和目录的复制

## 故障排除

如果遇到问题：

1. 确保 `src/assets` 目录中的文件存在
2. 检查文件路径是否正确
3. 确保有足够的磁盘空间
4. 查看控制台输出的错误信息
