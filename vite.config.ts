import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  assetsInclude: ['**/*.PNG'],
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: true,
    }),
    Components({
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 使用 Sass 现代 API，消除 legacy-js-api 弃用警告
        api: 'modern',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      // 开发环境代理 TapTap Web API，供首页实时拉取评分
      '/api/taptap': {
        target: 'https://www.taptap.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/taptap/, '/webapiv2'),
        headers: {
          Referer: 'https://www.taptap.cn/',
        },
      },
      // 开发环境代理详情页 HTML，用于解析「热度」(download_count)
      '/api/taptap-app': {
        target: 'https://www.taptap.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/taptap-app/, '/app'),
        headers: {
          Referer: 'https://www.taptap.cn/',
          'User-Agent': 'Mozilla/5.0',
        },
      },
    },
  },
})
