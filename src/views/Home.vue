<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- 游戏Banner背景 -->
      <div class="absolute inset-0">
        <img 
          src="/images/games/littleswordmaster/banner-1920x1080.png" 
          alt="小小御剑士游戏背景" 
          class="w-full h-full object-cover"
        >
        <!-- 渐变遮罩 -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>
      
      <!-- 浮动装饰元素 -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-jelly-500/20 rounded-full animate-float"></div>
      <div class="absolute top-40 right-20 w-16 h-16 bg-jelly-400/30 rounded-full animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-40 left-20 w-12 h-12 bg-jelly-600/25 rounded-full animate-float" style="animation-delay: 4s;"></div>
      
      <!-- 内容区域 -->
      <div class="relative z-10 container-max page-spacing flex items-center min-h-screen">
        <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full gap-8 lg:gap-16">
          <!-- 工作室信息 -->
          <div class="space-y-6 text-center lg:text-left">
            <h1 class="text-4xl sm:text-5xl lg:text-7xl font-display font-bold">
              <span class="gradient-text" style="text-shadow: 0px 0px 15px rgba(221, 87, 255, 0.6);">果冻猫侠</span>
              <br>
              <span class="text-white" style="text-shadow: 0px 0px 12px rgba(255,255,255,0.4);">工作室</span>
            </h1>
            <p class="text-lg sm:text-xl lg:text-2xl text-white max-w-lg mx-auto lg:mx-0 font-medium" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.8);">
              创造充满想象力的游戏世界，为玩家带来独特的冒险体验
            </p>
          </div>
          
          <!-- 游戏信息 -->
          <div class="space-y-6 max-w-md mx-auto lg:mx-0">
            <!-- 游戏标题 -->
            <div class="space-y-3 text-center lg:text-left">
              <div class="flex items-center justify-center lg:justify-start space-x-4">
                <div class="w-16 h-16 rounded-xl overflow-hidden">
                  <img 
                    src="/images/games/littleswordmaster/logo-512.png" 
                    alt="小小御剑士logo" 
                    class="w-full h-full object-cover"
                  >
                </div>
                <div>
                  <h2 class="text-3xl lg:text-4xl font-display font-bold gradient-text">小小御剑士</h2>
                  <p class="text-lg lg:text-xl text-white font-medium" style="text-shadow: 1px 1px 3px rgba(0,0,0,0.8);">Little Sword Master</p>
                </div>
              </div>
              
              <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                <div class="inline-block bg-jelly-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-jelly-500/30">
                  <span class="text-jelly-300 font-medium text-sm">现已发布</span>
                </div>
                
                <!-- 多平台发布标签 -->
                <div class="flex gap-2 flex-wrap">
                  <a href="https://www.taptap.cn/app/766679?os=android" target="_blank" rel="noopener noreferrer" class="platform-mini-btn bg-blue-500">
                    <span class="text-xs">TapTap</span>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="platform-mini-btn bg-green-500">
                    <span class="text-xs">微信</span>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="platform-mini-btn bg-red-500">
                    <span class="text-xs">抖音</span>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="platform-mini-btn bg-orange-500">
                    <span class="text-xs">好游快爆</span>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="platform-mini-btn bg-purple-500">
                    <span class="text-xs">4399</span>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- 游戏描述 -->
            <div class="bg-black/60 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-2xl">
              <p class="text-base lg:text-lg text-white leading-relaxed font-medium" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.9);">
                融合 Roguelike、平台跳跃、弹幕射击与随机抽牌机制，力求让每一局体验都焕然一新。
                玩家将置身于不断变化的关卡节奏中：跳跃、躲避、射击，同时运筹抽卡策略。
              </p>
            </div>
            
            <!-- 游戏特色标签 -->
            <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span class="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm backdrop-blur-sm border border-purple-500/30">Roguelike</span>
              <span class="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm backdrop-blur-sm border border-blue-500/30">平台跳跃</span>
              <span class="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm backdrop-blur-sm border border-green-500/30">弹幕射击</span>
              <span class="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm backdrop-blur-sm border border-yellow-500/30">随机抽牌</span>
            </div>
            
            <!-- 操作按钮 -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <RouterLink to="/products" class="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl">
                了解详情
              </RouterLink>
              <a href="https://www.taptap.cn/app/766679?os=android" target="_blank" rel="noopener noreferrer" class="btn-secondary text-lg px-8 py-4 shadow-xl hover:shadow-2xl">
                立即体验
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 工作室特色区域 -->
    <section class="section-spacing bg-gray-900">
      <div class="container-max">
        <div class="text-center mb-16">
          <h3 class="text-3xl font-display font-bold gradient-text mb-4">独立游戏工作室</h3>
          <p class="text-xl text-gray-300">专注创新，追求卓越</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center space-y-4">
            <div class="w-20 h-20 bg-jelly-500/20 rounded-full flex items-center justify-center mx-auto">
              <span class="text-3xl">🎮</span>
            </div>
            <h4 class="text-xl font-semibold text-white">创新玩法</h4>
            <p class="text-gray-300">融合多种游戏机制，创造独特体验</p>
          </div>
          <div class="text-center space-y-4">
            <div class="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
              <span class="text-3xl">💎</span>
            </div>
            <h4 class="text-xl font-semibold text-white">精品制作</h4>
            <p class="text-gray-300">专注质量，每一款游戏都精心打磨</p>
          </div>
          <div class="text-center space-y-4">
            <div class="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
              <span class="text-3xl">🚀</span>
            </div>
            <h4 class="text-xl font-semibold text-white">持续更新</h4>
            <p class="text-gray-300">不断优化，为玩家带来更好体验</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Home page component
</script>