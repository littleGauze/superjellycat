<template>
  <div class="grid-background">
    <!-- 地球保卫计划展示 -->
    <section class="hero-section">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="relative order-2 lg:order-1">
            <div class="space-y-6">
              <div class="relative">
                <div class="aspect-[16/9] rounded-2xl overflow-hidden relative max-h-[600px] bg-gray-900/70">
                  <img
                    :src="currentEarthDefenseImage.image"
                    :alt="currentEarthDefenseImage.title"
                    class="w-full h-full transition-all duration-500"
                    :class="currentEarthDefenseImage.portrait ? 'object-contain' : 'object-cover'"
                  >
                  <div class="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40 pointer-events-none"></div>
                  <div class="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p class="text-white text-sm font-medium">{{ currentEarthDefenseImage.title }}</p>
                  </div>
                </div>
              </div>

              <div class="relative">
                <div
                  class="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
                  ref="earthDefenseThumbnailContainer"
                >
                  <div
                    v-for="(image, index) in earthDefenseImages"
                    :key="image.image"
                    @click="selectEarthDefenseImage(index)"
                    class="flex-shrink-0 cursor-pointer group"
                    :class="{ 'ring-2 ring-jelly-400': currentEarthDefenseImageIndex === index }"
                  >
                    <div
                      class="rounded-lg overflow-hidden bg-gray-800"
                      :class="image.portrait ? 'w-16 h-28' : 'w-28 h-16'"
                    >
                      <img
                        :src="image.image"
                        :alt="image.title"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      >
                    </div>
                  </div>
                </div>

                <div class="flex justify-center mt-4 space-x-2">
                  <button
                    v-for="(_, index) in earthDefenseImages"
                    :key="index"
                    @click="selectEarthDefenseImage(index)"
                    class="w-2 h-2 rounded-full transition-all duration-300"
                    :class="currentEarthDefenseImageIndex === index ? 'bg-jelly-400 w-6' : 'bg-gray-600'"
                  ></button>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2 space-y-8">
            <div class="space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                <div class="inline-block bg-jelly-500/20 px-3 py-1.5 rounded-full">
                  <span class="text-jelly-400 font-medium text-sm">最新发布</span>
                </div>
                <div class="flex gap-2 flex-wrap">
                  <a :href="earthDefenseTapTapUrl" target="_blank" rel="noopener noreferrer" class="platform-mini-btn bg-blue-500">
                    <span class="text-xs">TapTap</span>
                  </a>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-20 h-20 rounded-2xl overflow-hidden bg-gray-900/70 border border-white/10 shadow-xl">
                  <img
                    src="/images/games/earthDefenseInitiative/logo.png"
                    alt="地球保卫计划logo"
                    class="w-full h-full object-cover"
                  >
                </div>
                <div>
                  <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                    <span class="gradient-text">地球保卫计划</span>
                  </h1>
                  <p class="text-xl text-gray-300 font-medium">Earth Defense Project</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <p class="text-lg text-gray-300 leading-relaxed">
                《地球保卫计划》是一款融合引力操控、塔防与肉鸽成长的竖屏休闲游戏。玩家将操控月球改变陨石轨迹，阻止其撞击地球；同时接收地球发射的科研火箭获取经验，解锁护盾、激光炮、轨道炮、导弹等科技武器。
              </p>

              <div class="space-y-3">
                <div
                  v-for="item in earthDefenseSystems"
                  :key="item"
                  class="flex items-center space-x-3"
                >
                  <div class="w-2 h-2 bg-jelly-400 rounded-full"></div>
                  <span class="text-gray-300">{{ item }}</span>
                </div>
              </div>

              <p class="text-base text-gray-400 leading-relaxed">
                随着时间推移，陨石将不断增强并出现高速、分裂、巨型等特殊类型。合理搭配科技卡牌，构筑专属防御流派，在无尽陨石风暴中守护人类最后的家园！
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <a :href="earthDefenseTapTapUrl" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-4">
                前往 TapTap
              </a>
              <button @click="playVideo(earthDefenseVideoUrl)" class="btn-secondary text-lg px-8 py-4">
                观看宣传片
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 异界钓鱼佬展示 -->
    <section class="section-spacing">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- 左侧：游戏画廊区域 -->
          <div class="relative order-2 lg:order-1">
            <div class="space-y-6">
              <!-- 主图展示 -->
              <div class="relative">
                <div class="aspect-[16/9] rounded-2xl overflow-hidden relative max-h-[600px] bg-gray-800/50">
                  <img
                    :src="currentAnglerImage.image"
                    :alt="currentAnglerImage.title"
                    class="w-full h-full object-cover transition-all duration-500"
                  >
                  <!-- 遮罩层 -->
                  <div class="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>

                  <!-- 装饰性元素 -->
                  <div class="absolute top-4 right-4 w-8 h-8 bg-jelly-500/30 rounded-full animate-glow"></div>
                  <div
                    class="absolute bottom-4 left-4 w-6 h-6 bg-purple-500/30 rounded-full animate-glow"
                    style="animation-delay: 1s;"
                  ></div>

                  <!-- 图片标题 -->
                  <div class="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p class="text-white text-sm font-medium">{{ currentAnglerImage.title }}</p>
                  </div>
                </div>

              </div>

              <!-- 缩略图滑动区域 -->
              <div class="relative">
                <div
                  class="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
                  ref="anglerThumbnailContainer"
                >
                  <div
                    v-for="(image, index) in anglerImages"
                    :key="index"
                    @click="selectAnglerImage(index)"
                    class="flex-shrink-0 cursor-pointer group"
                    :class="{ 'ring-2 ring-jelly-400': currentAnglerImageIndex === index }"
                  >
                    <div class="w-28 h-16 rounded-lg overflow-hidden bg-gray-800">
                      <img
                        :src="image.image"
                        :alt="image.title"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      >
                    </div>
                  </div>
                </div>

                <!-- 滑动指示器 -->
                <div class="flex justify-center mt-4 space-x-2">
                  <button
                    v-for="(_, index) in anglerImages"
                    :key="index"
                    @click="selectAnglerImage(index)"
                    class="w-2 h-2 rounded-full transition-all duration-300"
                    :class="currentAnglerImageIndex === index ? 'bg-jelly-400 w-6' : 'bg-gray-600'"
                  ></button>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：游戏信息区域 -->
          <div class="order-1 lg:order-2 space-y-8">
            <!-- 游戏标题 -->
            <div class="space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                <div class="inline-block bg-jelly-500/20 px-3 py-1.5 rounded-full">
                  <span class="text-jelly-400 font-medium text-sm">现已发布</span>
                </div>
                
                <!-- 多平台下载 -->
                <div class="flex items-center gap-2">
                  <div class="flex gap-2 flex-wrap">
                    <a href="https://www.taptap.cn/app/802340?os=android" target="_blank" rel="noopener noreferrer" class="platform-mini-btn bg-blue-500">
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
              <h1 class="text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                <span class="gradient-text">异界钓鱼佬</span>
              </h1>
              <p class="text-xl text-gray-300 font-medium">The Isekai Angler</p>
            </div>

            <!-- 游戏描述 -->
            <div class="space-y-4">
              <p class="text-lg text-gray-300 leading-relaxed">
                一名无名钓鱼佬误入异界，在四季流转的世界里一边钓鱼、一边战斗。通过收集鱼卡、武器、鱼竿与符文，
                在章节间休整、商店选择与钓鱼补强中逐步搭建自己的战斗流派。
              </p>

              <!-- 游戏特色 -->
              <div class="space-y-3">
                <div
                  v-for="item in anglerSystems"
                  :key="item.title"
                  class="flex items-center space-x-3"
                >
                  <div class="w-2 h-2 bg-jelly-400 rounded-full"></div>
                  <span class="text-gray-300">{{ item.title }}</span>
                </div>
              </div>

              <p class="text-base text-gray-400 leading-relaxed">
                完成四季章节挑战，击败关底 Boss，成为真正的“异界钓鱼佬”。
              </p>
            </div>

            <!-- 操作按钮 -->
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="https://www.taptap.cn/app/802340?os=android" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-4">
                立即体验
              </a>
              <button type="button" class="btn-secondary text-lg px-8 py-4">
                观看宣传片
              </button>
            </div>

            <!-- 社交链接 -->
            <div class="flex items-center space-x-6">
              <a
                href="https://www.bilibili.com/video/BV1Q2DXBbEvt/?vd_source=475144602498f2d7de7a1820b128c413"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-jelly-400 transition-colors duration-300 flex items-center space-x-2"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.813 4.653c-.08-.1-.2-.15-.3-.15-.1 0-.2.05-.3.15L14.5 7.5c-.1.1-.1.2-.1.3v8c0 .1.05.2.15.3.1.1.2.15.3.15h6c.1 0 .2-.05.3-.15.1-.1.15-.2.15-.3V5c0-.1-.05-.2-.15-.3-.1-.1-.2-.15-.3-.15h-3.5zm-8.5 0c-.1 0-.2.05-.3.15L5.5 7.5c-.1.1-.1.2-.1.3v8c0 .1.05.2.15.3.1.1.2.15.3.15h6c.1 0 .2-.05.3-.15.1-.1.15-.2.15-.3V5c0-.1-.05-.2-.15-.3-.1-.1-.2-.15-.3-.15H9.313z"
                  />
                </svg>
                <span>Bilibili 开发视频合集</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- 小小御剑士展示 -->
    <section class="section-spacing">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- 左侧：游戏信息区域 -->
          <div class="order-1 lg:order-1 space-y-8">
            <!-- 游戏标题 -->
            <div class="space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                <div class="inline-block bg-jelly-500/20 px-3 py-1.5 rounded-full">
                  <span class="text-jelly-400 font-medium text-sm">现已发布</span>
                </div>
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
              <h2 class="text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                <span class="gradient-text">小小御剑士</span>
              </h2>
              <p class="text-xl text-gray-300 font-medium">Little Sword Master</p>
            </div>

            <!-- 游戏描述 -->
            <div class="space-y-4">
              <p class="text-lg text-gray-300 leading-relaxed">
                本游戏创新融合 Roguelike、平台跳跃、弹幕射击与随机抽牌机制，力求让每一局体验都焕然一新。
                玩家将置身于不断变化的关卡节奏中：跳跃、躲避、射击，同时运筹抽卡策略，
                从而在每次战斗中探索新的玩法、策略与挑战。
              </p>

              <!-- 游戏特色 -->
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-jelly-400 rounded-full"></div>
                  <span class="text-gray-300">Roguelike 随机生成</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-jelly-400 rounded-full"></div>
                  <span class="text-gray-300">平台跳跃挑战</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-jelly-400 rounded-full"></div>
                  <span class="text-gray-300">弹幕射击战斗</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-jelly-400 rounded-full"></div>
                  <span class="text-gray-300">随机抽牌策略</span>
                </div>
              </div>
            </div>

            <!-- 操作按钮 -->
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="https://www.taptap.cn/app/766679?os=android" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl">
                立即体验
              </a>
              <button @click="playVideo('/video/littleswordmaster.mp4')" class="btn-secondary text-lg px-8 py-4 shadow-xl hover:shadow-2xl">
                观看宣传片
              </button>
            </div>

            <!-- 社交链接 -->
            <div class="flex items-center space-x-6">
              <a
                href="https://www.bilibili.com/video/BV1Gva7zNEMS/?spm_id_from=333.1387.0.0"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-jelly-400 transition-colors duration-300 flex items-center space-x-2"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.813 4.653c-.08-.1-.2-.15-.3-.15-.1 0-.2.05-.3.15L14.5 7.5c-.1.1-.1.2-.1.3v8c0 .1.05.2.15.3.1.1.2.15.3.15h6c.1 0 .2-.05.3-.15.1-.1.15-.2.15-.3V5c0-.1-.05-.2-.15-.3-.1-.1-.2-.15-.3-.15h-3.5zm-8.5 0c-.1 0-.2.05-.3.15L5.5 7.5c-.1.1-.1.2-.1.3v8c0 .1.05.2.15.3.1.1.2.15.3.15h6c.1 0 .2-.05.3-.15.1-.1.15-.2.15-.3V5c0-.1-.05-.2-.15-.3-.1-.1-.2-.15-.3-.15H9.313z"
                  />
                </svg>
                <span>Bilibili</span>
              </a>
            </div>
          </div>

          <!-- 右侧：游戏画廊区域 -->
          <div class="relative order-2 lg:order-2">
            <div class="space-y-6">
              <!-- 主图展示 -->
              <div class="relative">
                <div class="aspect-[16/9] rounded-2xl overflow-hidden relative max-h-[600px] bg-gray-800/50">
                  <img
                    :src="currentImage.image"
                    :alt="currentImage.title"
                    class="w-full h-full object-contain transition-all duration-500"
                  >
                  <!-- 遮罩层 -->
                  <div class="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>

                  <!-- 装饰性元素 -->
                  <div class="absolute top-4 right-4 w-8 h-8 bg-jelly-500/30 rounded-full animate-glow"></div>
                  <div
                    class="absolute bottom-4 left-4 w-6 h-6 bg-purple-500/30 rounded-full animate-glow"
                    style="animation-delay: 1s;"
                  ></div>

                  <!-- 图片标题 -->
                  <div class="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p class="text-white text-sm font-medium">{{ currentImage.title }}</p>
                  </div>
                </div>
              </div>

              <!-- 缩略图滑动区域 -->
              <div class="relative">
                <div
                  class="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
                  ref="thumbnailContainer"
                >
                  <div
                    v-for="(image, index) in gameImages"
                    :key="image.title"
                    @click="selectImage(index)"
                    class="flex-shrink-0 cursor-pointer group"
                    :class="{ 'ring-2 ring-jelly-400': currentImageIndex === index }"
                  >
                    <div class="w-16 h-24 rounded-lg overflow-hidden bg-gray-800">
                      <img
                        :src="image.image"
                        :alt="image.title"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      >
                    </div>
                  </div>
                </div>

                <!-- 滑动指示器 -->
                <div class="flex justify-center mt-4 space-x-2">
                  <button
                    v-for="(_, index) in gameImages"
                    :key="index"
                    @click="selectImage(index)"
                    class="w-2 h-2 rounded-full transition-all duration-300"
                    :class="currentImageIndex === index ? 'bg-jelly-400 w-6' : 'bg-gray-600'"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 更多游戏 -->
    <section class="section-spacing">
      <div class="container-max">
        <div
          v-for="(game, index) in upcomingGames"
          :key="game.title"
          class="mb-16"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- 游戏媒体区域 -->
            <div
              class="relative order-2"
              :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'"
            >
              <div class="space-y-6">
                <!-- 主图展示 -->
                <div class="relative">
                  <div class="aspect-[16/9] rounded-2xl overflow-hidden relative max-h-[600px] bg-gray-800/50">
                    <img
                      :src="game.image"
                      :alt="game.title"
                      class="w-full h-full object-cover transition-all duration-500"
                    >
                    <!-- 遮罩层 -->
                    <div class="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>

                    <!-- 装饰性元素 -->
                    <div class="absolute top-4 right-4 w-8 h-8 bg-jelly-500/30 rounded-full animate-glow"></div>
                    <div
                      class="absolute bottom-4 left-4 w-6 h-6 bg-purple-500/30 rounded-full animate-glow"
                      style="animation-delay: 1s;"
                    ></div>

                    <!-- 图片标题 -->
                    <div class="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <p class="text-white text-sm font-medium">{{ game.title }}</p>
                    </div>

                    <!-- 视频播放按钮 -->
                    <div class="absolute bottom-6 right-6">
                      <button
                        @click="playVideo('/video/savethefarm.mp4')"
                        class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                      >
                        <svg
                          class="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 游戏信息区域 -->
            <div
              class="order-1 space-y-8"
              :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
            >
              <!-- 游戏标题 -->
              <div class="space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div class="inline-block bg-jelly-500/20 px-3 py-1.5 rounded-full">
                    <span class="text-jelly-400 font-medium text-sm">{{ game.status }}</span>
                  </div>
                </div>
                <h3 class="text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                  <span class="gradient-text">{{ game.title }}</span>
                </h3>
                <p class="text-xl text-gray-300 font-medium">{{ game.englishTitle }}</p>
              </div>

              <!-- 游戏描述 -->
              <div class="space-y-4">
                <p class="text-lg text-gray-300 leading-relaxed">
                  {{ game.description }}
                </p>
              </div>

              <!-- 操作按钮 -->
              <div class="flex flex-col sm:flex-row gap-4">
                <a href="https://www.bilibili.com/video/BV1YzagzEEQr/?vd_source=475144602498f2d7de7a1820b128c413" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl">
                  关注开发进度
                </a>
                <button @click="playVideo('/video/savethefarm.mp4')" class="btn-secondary text-lg px-8 py-4 shadow-xl hover:shadow-2xl">
                  观看预告片
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 行动召唤 -->
    <section class="section-spacing bg-gray-800/30">
      <div class="container-max text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl font-display font-bold gradient-text mb-6">准备开始冒险了吗？</h2>
          <p class="text-xl text-gray-300 mb-8">
            加入我们的游戏世界，体验独特的冒险之旅
          </p>
          <div class="flex justify-center">
            <a :href="earthDefenseTapTapUrl" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-4">前往 TapTap</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 视频播放模态框 -->
    <div v-if="showVideoModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" @click="closeVideoModal">
      <div class="relative w-full max-w-4xl mx-4" @click.stop>
        <button
          @click="closeVideoModal"
          class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="aspect-video bg-black rounded-lg overflow-hidden">
          <video
            ref="videoPlayer"
            :src="currentVideoSrc"
            controls
            autoplay
            class="w-full h-full"
          >
            您的浏览器不支持视频播放。
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import anglerBannerFishing from '@/assets/images/games/theisekaiangler/banner1.png'
import anglerBannerBattle from '@/assets/images/games/theisekaiangler/banner3.png'
import anglerAutumnFishing from '@/assets/images/games/theisekaiangler/IMG_3816.PNG'
import anglerSpringBoss from '@/assets/images/games/theisekaiangler/Boss1.jpg'
import anglerSpringBattle from '@/assets/images/games/theisekaiangler/IMG_3827.PNG'
import anglerShop from '@/assets/images/games/theisekaiangler/IMG_3826.PNG'
import anglerCards from '@/assets/images/games/theisekaiangler/IMG_3819.PNG'
import anglerFishing from '@/assets/images/games/theisekaiangler/IMG_3807.PNG'

// 视频播放相关状态
const showVideoModal = ref(false)
const currentVideoSrc = ref('')
const videoPlayer = ref<HTMLVideoElement>()
const earthDefenseTapTapUrl = 'https://l.taptap.cn/rT2bFETp?channel=rep-rep_djitefuit5g'
const earthDefenseVideoUrl = '/video/earthDefenseInitiative.mp4'

// 视频播放函数
const playVideo = (videoSrc: string) => {
  currentVideoSrc.value = videoSrc
  showVideoModal.value = true
}

// 关闭视频模态框
const closeVideoModal = () => {
  showVideoModal.value = false
  if (videoPlayer.value) {
    videoPlayer.value.pause()
  }
}

const earthDefenseSystems = [
  '操控月球引力，改变陨石轨迹',
  '接收科研火箭，获取经验与科技卡牌',
  '解锁护盾、激光炮、轨道炮、导弹等武器',
  '应对高速、分裂、巨型等特殊陨石'
]

const earthDefenseImages = [
  { title: '游戏 Banner', image: '/images/games/earthDefenseInitiative/banner.png', portrait: false },
  { title: '月球引力操控', image: '/images/games/earthDefenseInitiative/IMG_4184.PNG', portrait: true },
  { title: '陨石风暴', image: '/images/games/earthDefenseInitiative/IMG_4188.PNG', portrait: true },
  { title: '科研火箭', image: '/images/games/earthDefenseInitiative/IMG_4190.PNG', portrait: true },
  { title: '科技升级', image: '/images/games/earthDefenseInitiative/IMG_4198.PNG', portrait: true },
  { title: '护盾防线', image: '/images/games/earthDefenseInitiative/IMG_4200.PNG', portrait: true },
  { title: '武器构筑', image: '/images/games/earthDefenseInitiative/IMG_4201.PNG', portrait: true },
  { title: '巨型陨石', image: '/images/games/earthDefenseInitiative/IMG_4227.PNG', portrait: true },
  { title: '防御流派', image: '/images/games/earthDefenseInitiative/IMG_4238.PNG', portrait: true },
  { title: '无尽守护', image: '/images/games/earthDefenseInitiative/IMG_4241.PNG', portrait: true }
]

const currentEarthDefenseImageIndex = ref(0)
const earthDefenseThumbnailContainer = ref<HTMLElement>()
const currentEarthDefenseImage = computed(() => earthDefenseImages[currentEarthDefenseImageIndex.value])

const gameImages = [
  { title: '游戏Banner', image: '/images/games/littleswordmaster/banner-1920x1080.png' },
  { title: '秋季场景', image: '/images/games/littleswordmaster/screenshots/autumn_1080x1920.png' },
  { title: 'Boss战斗', image: '/images/games/littleswordmaster/screenshots/boss_fight_1080x1920.png' },
  { title: '闪电技能', image: '/images/games/littleswordmaster/screenshots/lightning_1080x1920.png' },
  { title: '夏季场景', image: '/images/games/littleswordmaster/screenshots/summer_1080x1920.png' },
  { title: '剑术展示', image: '/images/games/littleswordmaster/screenshots/swords-1080x1920.png' },
  { title: '冬季场景', image: '/images/games/littleswordmaster/screenshots/winter_1080x1920.png' }
]

const currentImageIndex = ref(0)
const thumbnailContainer = ref<HTMLElement>()
const anglerThumbnailContainer = ref<HTMLElement>()

const currentImage = computed(() => gameImages[currentImageIndex.value])

const scrollThumbnailIntoView = (container: HTMLElement | undefined, index: number) => {
  if (!container) return

  const item = container.children[index] as HTMLElement | undefined
  if (!item) return

  const targetLeft = item.offsetLeft - (container.clientWidth - item.clientWidth) / 2
  container.scrollTo({
    left: targetLeft,
    behavior: 'smooth'
  })
}

const selectImage = (index: number) => {
  currentImageIndex.value = index
  nextTick(() => scrollThumbnailIntoView(thumbnailContainer.value, index))
}

const selectEarthDefenseImage = (index: number) => {
  currentEarthDefenseImageIndex.value = index
  nextTick(() => scrollThumbnailIntoView(earthDefenseThumbnailContainer.value, index))
}

const anglerImages = [
  { title: '异界垂钓', note: '跨过异界水域，在战斗之外寻找钓获的惊喜。', image: anglerBannerFishing },
  { title: '异界钓鱼佬', note: '钓鱼佬误入异界，鱼竿也能成为战斗的起点。', image: anglerBannerBattle },
  { title: '钓鱼补强', note: '在章节间寻找稀有鱼种，为下一轮构筑补上关键资源。', image: anglerAutumnFishing },
  { title: 'Boss 压迫', note: '读懂红圈预警，在弹幕缝隙里寻找输出节奏。', image: anglerSpringBoss },
  { title: '鱼卡战斗', note: '围绕鱼卡、武器、鱼竿与符文叠出自己的战斗流派。', image: anglerSpringBattle },
  { title: '章节休整', note: '清关后进入商店抉择，决定下一章的成长路线。', image: anglerShop },
  { title: '构筑选择', note: '每次收集都可能改变打法，让轻度肉鸽循环保持新鲜。', image: anglerCards },
  { title: '异界水域', note: '探索四季场景，在战斗之外寻找钓获的惊喜。', image: anglerFishing }
]

const currentAnglerImageIndex = ref(0)
const currentAnglerImage = computed(() => anglerImages[currentAnglerImageIndex.value])

const selectAnglerImage = (index: number) => {
  currentAnglerImageIndex.value = index
  nextTick(() => scrollThumbnailIntoView(anglerThumbnailContainer.value, index))
}

const anglerSystems = [
  {
    number: '01',
    title: '战斗清关',
    text: '在章节地图中边走位边释放构筑能力，击退异界怪物并推进关卡。'
  },
  {
    number: '02',
    title: '钓鱼补强',
    text: '通过钓获稀有鱼种与收集鱼卡，把休闲钓鱼变成下一场战斗的成长来源。'
  },
  {
    number: '03',
    title: '流派构筑',
    text: '武器、鱼竿、符文与鱼卡互相组合，形成不同的输出、生存和控制路线。'
  },
  {
    number: '04',
    title: '四季挑战',
    text: '穿过春夏秋冬的章节节奏，完成休整、商店选择与关底 Boss 挑战。'
  }
]

const upcomingGames = [
  {
    title: '救救农场吧',
    englishTitle: 'Save the Farm',
    description: '在一个原本风和日丽的下午，突然乌云密布一道闪电劈中农场，留下一个神秘的传送门，农场里的动物纷纷被传送门传送到了世界各地，农场没有小动物怎么行呢？作为农场主的你准备带上装备去找回失踪的动物，励志要寻回每一只农场动物，从此踏上了拯救农场和小动物的旅程。',
    status: '开发中',
    image: '/images/games/savethefarm/main.jpg',
    video: '/savethefarm/savethefarm.mp4'
  }
]
</script>
