<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div class="container-max text-center">
        <h1 class="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">联系我们</h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          感谢您对SuperJellyCat的关注
        </p>
      </div>
    </section>

    <!-- Coming Soon Section -->
    <section class="section-spacing">
      <div class="container-max">
        <div class="max-w-4xl mx-auto text-center">
          <div class="glass-card p-12">
            <div class="w-24 h-24 bg-jelly-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg class="w-12 h-12 text-jelly-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 class="text-3xl font-display font-bold text-white mb-6">即将开放</h2>
            <p class="text-lg text-gray-300 leading-relaxed mb-8">
              我们正在完善联系功能，敬请期待。如果您有任何问题或建议，欢迎通过游戏内反馈系统联系我们。
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink to="/products" class="btn-primary text-lg px-8 py-4">
                查看我们的游戏
              </RouterLink>
              <RouterLink to="/about" class="btn-secondary text-lg px-8 py-4">
                了解更多
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Contact page component - Coming soon
</script>