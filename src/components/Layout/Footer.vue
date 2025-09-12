<template>
  <footer class="bg-gray-900 border-t border-gray-800/50">
    <div class="container-max section-spacing">
      <div class="text-center">
        <!-- Company Info -->
        <div class="mb-8">
          <div class="flex items-center justify-center space-x-3 mb-4">
            <div class="w-10 h-10 rounded-lg overflow-hidden">
              <img src="/src/assets/images/superjellycat.png" alt="SuperJellyCat Logo" class="w-full h-full object-cover">
            </div>
            <div>
              <h3 class="text-xl font-display font-bold gradient-text">SuperJellyCat</h3>
              <p class="text-sm text-gray-400">果冻猫侠工作室</p>
            </div>
          </div>
          <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
            专注于创造独特游戏体验的个人独立游戏工作室，致力于为玩家带来充满想象力的游戏世界。
          </p>
          <div class="flex justify-center">
            <a href="https://space.bilibili.com/30544289" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-jelly-400 transition-colors duration-300 flex items-center space-x-2">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.813 4.653c-.08-.1-.2-.15-.3-.15-.1 0-.2.05-.3.15L14.5 7.5c-.1.1-.1.2-.1.3v8c0 .1.05.2.15.3.1.1.2.15.3.15h6c.1 0 .2-.05.3-.15.1-.1.15-.2.15-.3V5c0-.1-.05-.2-.15-.3-.1-.1-.2-.15-.3-.15h-3.5zm-8.5 0c-.1 0-.2.05-.3.15L5.5 7.5c-.1.1-.1.2-.1.3v8c0 .1.05.2.15.3.1.1.2.15.3.15h6c.1 0 .2-.05.3-.15.1-.1.15-.2.15-.3V5c0-.1-.05-.2-.15-.3-.1-.1-.2-.15-.3-.15H9.313z"/>
              </svg>
              <span>Bilibili</span>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="mb-8">
          <h4 class="text-lg font-semibold text-white mb-4">快速链接</h4>
          <div class="flex justify-center space-x-8">
            <RouterLink to="/" class="text-gray-300 hover:text-jelly-400 transition-colors duration-300">首页</RouterLink>
            <RouterLink to="/products" class="text-gray-300 hover:text-jelly-400 transition-colors duration-300">产品</RouterLink>
            <RouterLink to="/about" class="text-gray-300 hover:text-jelly-400 transition-colors duration-300">关于我们</RouterLink>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800/50 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 果冻猫侠工作室 (SuperJellyCat). 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>
