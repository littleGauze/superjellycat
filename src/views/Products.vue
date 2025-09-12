<template>
  <div class="grid-background">
    <!-- Hero Section - 参考米哈游设计 -->
    <section class="hero-section">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- 左侧：游戏画廊区域 -->
          <div class="relative order-2 lg:order-1">
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

                <!-- 视频播放按钮 -->
                <div class="absolute bottom-6 right-6">
                  <button
                    @click="playVideo('/video/littleswordmaster.mp4')"
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

              <!-- 缩略图滑动区域 -->
              <div class="relative">
                <div
                  class="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
                  ref="thumbnailContainer"
                >
                  <div
                    v-for="(image, index) in gameImages"
                    :key="index"
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

          <!-- 右侧：游戏信息区域 -->
          <div class="order-1 lg:order-2 space-y-8">
            <!-- 游戏标题 -->
            <div class="space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                <div class="inline-block bg-jelly-500/20 px-3 py-1.5 rounded-full">
                  <span class="text-jelly-400 font-medium text-sm">最新发布</span>
                </div>
                
                <!-- 多平台下载 -->
                <div class="flex items-center gap-2">
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
              <h1 class="text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                <span class="gradient-text">小小御剑士</span>
              </h1>
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
              <a href="https://www.taptap.cn/app/766679?os=android" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-4">
                立即体验
              </a>
                <button @click="playVideo('/video/littleswordmaster.mp4')" class="btn-secondary text-lg px-8 py-4">
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
        </div>
      </div>
    </section>


    <!-- 即将发布的游戏 -->
    <section class="section-spacing">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold gradient-text mb-4">即将发布</h2>
          <p class="text-xl text-gray-300">更多精彩游戏正在开发中</p>
        </div>

        <div
          v-for="game in upcomingGames"
          :key="game.title"
          class="mb-16"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- 左侧：游戏信息区域 -->
            <div class="order-1 lg:order-1 space-y-8">
              <!-- 游戏标题 -->
              <div class="space-y-4">
                <div class="inline-block bg-jelly-500/20 px-4 py-2 rounded-full">
                  <span class="text-jelly-400 font-medium text-sm">{{ game.status }}</span>
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

            <!-- 右侧：游戏媒体区域 -->
            <div class="relative order-2 lg:order-2">
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
            <a href="https://www.taptap.cn/app/766679?os=android" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-4">立即下载</a>
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
import { ref, computed } from 'vue'

// 视频播放相关状态
const showVideoModal = ref(false)
const currentVideoSrc = ref('')
const videoPlayer = ref<HTMLVideoElement>()

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

const currentImage = computed(() => gameImages[currentImageIndex.value])

const selectImage = (index: number) => {
  currentImageIndex.value = index
}

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