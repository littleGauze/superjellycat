#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

// 需要复制的资源映射
const assetMappings = [
  // 游戏相关图片
  {
    src: 'src/assets/images/games/littleswordmaster/banner-1920x1080.png',
    dest: 'public/images/games/littleswordmaster/banner-1920x1080.png'
  },
  {
    src: 'src/assets/images/games/littleswordmaster/logo-512.png',
    dest: 'public/images/games/littleswordmaster/logo-512.png'
  },
  // 游戏截图
  {
    src: 'src/assets/images/games/littleswordmaster/screenshots',
    dest: 'public/images/games/littleswordmaster/screenshots'
  },
  // 地球保卫计划图片
  {
    src: 'src/assets/images/games/earthDefenseInitiative',
    dest: 'public/images/games/earthDefenseInitiative'
  },
  // 救救农场吧图片
  {
    src: 'src/assets/images/games/savethefarm/main.jpg',
    dest: 'public/images/games/savethefarm/main.jpg'
  },
  // 工作室Logo
  {
    src: 'src/assets/images/superjellycat.png',
    dest: 'public/images/superjellycat.png'
  },
  // 开发者头像
  {
    src: 'src/assets/images/Avatar.jpg',
    dest: 'public/images/Avatar.jpg'
  }
]

// 创建目录
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

// 复制文件
function copyFile(src, dest) {
  try {
    ensureDir(path.dirname(dest))
    fs.copyFileSync(src, dest)
    console.log(`✅ 复制: ${src} → ${dest}`)
  } catch (error) {
    console.error(`❌ 复制失败: ${src} → ${dest}`, error.message)
  }
}

// 复制目录
function copyDir(src, dest) {
  try {
    ensureDir(dest)
    const items = fs.readdirSync(src)
    
    for (const item of items) {
      const srcPath = path.join(src, item)
      const destPath = path.join(dest, item)
      const stat = fs.statSync(srcPath)
      
      if (stat.isDirectory()) {
        copyDir(srcPath, destPath)
      } else {
        copyFile(srcPath, destPath)
      }
    }
    console.log(`✅ 复制目录: ${src} → ${dest}`)
  } catch (error) {
    console.error(`❌ 复制目录失败: ${src} → ${dest}`, error.message)
  }
}

// 主函数
function main() {
  console.log('🚀 开始复制资源文件...')
  
  for (const mapping of assetMappings) {
    const srcPath = path.resolve(projectRoot, mapping.src)
    const destPath = path.resolve(projectRoot, mapping.dest)
    
    if (!fs.existsSync(srcPath)) {
      console.warn(`⚠️  源文件不存在: ${mapping.src}`)
      continue
    }
    
    const stat = fs.statSync(srcPath)
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      copyFile(srcPath, destPath)
    }
  }
  
  console.log('✨ 资源文件复制完成!')
}

// 运行脚本
main()
