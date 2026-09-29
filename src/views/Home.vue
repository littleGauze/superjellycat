<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- 游戏Banner背景 -->
      <div class="absolute inset-0">
        <img
          src="/images/games/flip-coin/banner.png"
          alt="这地毯能爆金币游戏背景"
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
                <div class="w-16 h-16 rounded-xl overflow-hidden bg-amber-500/20 border border-amber-300/30">
                  <img
                    src="/images/games/flip-coin/logo.png"
                    alt="这地毯能爆金币logo"
                    class="w-full h-full object-cover"
                  >
                </div>
                <div>
                  <h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold gradient-text">这地毯能爆金币</h2>
                  <p class="text-lg lg:text-xl text-white font-medium" style="text-shadow: 1px 1px 3px rgba(0,0,0,0.8);">Flip Coin</p>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                <div class="inline-block bg-jelly-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-jelly-500/30">
                  <span class="text-jelly-300 font-medium text-sm">最新发布</span>
                </div>

                <!-- 多平台发布标签 -->
                <div class="flex gap-2 flex-wrap">
                  <a
                    :href="flipCoinTapTapUrl || undefined"
                    :target="flipCoinTapTapUrl ? '_blank' : undefined"
                    :rel="flipCoinTapTapUrl ? 'noopener noreferrer' : undefined"
                    class="platform-mini-btn bg-blue-500"
                    :class="{ 'pointer-events-none opacity-60': !flipCoinTapTapUrl }"
                  >
                    <span class="text-xs">TapTap</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- 游戏描述 -->
            <div class="bg-black/60 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-2xl">
              <p class="text-base lg:text-lg text-white leading-relaxed font-medium" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.9);">
                轻松解压的竖屏像素风增量游戏。从一枚硬币开始，在神奇魔毯上抛币、翻面、爆金币，雇佣员工打造全自动金币生产线！
              </p>
            </div>

            <!-- 游戏特色标签 -->
            <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span class="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm backdrop-blur-sm border border-amber-500/30">像素增量</span>
              <span class="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm backdrop-blur-sm border border-yellow-500/30">抛币爆金</span>
              <span class="px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm backdrop-blur-sm border border-red-500/30">魔毯收集</span>
              <span class="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm backdrop-blur-sm border border-orange-500/30">重生强化</span>
            </div>

            <!-- 操作按钮 -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <RouterLink to="/products" class="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl">
                了解详情
              </RouterLink>
              <a
                v-if="flipCoinTapTapUrl"
                :href="flipCoinTapTapUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary text-lg px-8 py-4 shadow-xl hover:shadow-2xl"
              >
                前往 TapTap
              </a>
              <span
                v-else
                class="btn-secondary text-lg px-8 py-4 shadow-xl opacity-60 cursor-not-allowed"
              >
                前往 TapTap
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 热门游戏板块 -->
    <section class="hot-games-section section-spacing bg-black">
      <div class="container-max">
        <div class="flex items-end justify-between gap-4 mb-10 sm:mb-14">
          <h3 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">热门游戏</h3>
          <RouterLink
            to="/products"
            class="hot-games-all-btn shrink-0"
          >
            查看全部游戏 →
          </RouterLink>
        </div>

        <div class="hot-games-stage">
          <button
            v-for="(game, index) in visibleHotGames"
            :key="index"
            type="button"
            class="hot-game-card"
            :class="cardClass(index)"
            :style="cardStyle(index)"
            @click="onHotGameClick(index, game)"
          >
            <img
              :src="game.cover"
              :alt="game.title"
              class="hot-game-card__image"
              draggable="false"
            >
            <div class="hot-game-card__shade"></div>

            <div class="hot-game-card__rating">
              {{ ratingText(game) }}
            </div>

            <div class="hot-game-card__meta">
              <div v-if="game.hot" class="hot-game-card__badge">
                ★ 热门游戏
              </div>
              <h4 class="hot-game-card__title">{{ game.title }}</h4>
              <p class="hot-game-card__stats">
                <span class="hot-game-card__play"></span>
                {{ heatText(game) }}
              </p>
            </div>
          </button>
        </div>

        <div class="flex justify-center mt-8 gap-2">
          <button
            v-for="(_, index) in hotGames"
            :key="index"
            type="button"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="activeHotIndex === index ? 'bg-jelly-400 w-6' : 'bg-gray-600'"
            @click="activeHotIndex = index"
          ></button>
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
import { computed, ref } from 'vue'
import { hotGames, type StudioGame } from '@/data/games'
import { useTapTapStats } from '@/composables/useTapTapStats'
import { formatHeatCount, formatTapScore } from '@/utils/taptap'

const flipCoinTapTapUrl = 'https://tap.cn/RWuqb0Q9'
const { getStat, loading: statsLoading } = useTapTapStats(hotGames)

const activeHotIndex = ref(2)
const hotCenterIndex = 2

const visibleHotGames = computed(() => {
  const total = hotGames.length
  const offsets = [-2, -1, 0, 1, 2]
  return offsets.map((offset) => hotGames[(activeHotIndex.value + offset + total) % total])
})

const ratingText = (game: StudioGame) => {
  const stat = getStat(game)
  if (!stat && statsLoading.value) return '评分加载中…'
  return formatTapScore(stat?.score)
}

const heatText = (game: StudioGame) => {
  const stat = getStat(game)
  if (!stat && statsLoading.value) return '热度加载中…'
  if (!stat) return '热度 --'
  return formatHeatCount(stat.heatCount)
}

const cardClass = (index: number) => {
  const distance = Math.abs(index - hotCenterIndex)
  return {
    'is-center': distance === 0,
    'is-near': distance === 1,
    'is-far': distance === 2
  }
}

const cardStyle = (index: number) => {
  const offset = index - hotCenterIndex
  const scales = [0.72, 0.86, 1, 0.86, 0.72]
  const lifts = [18, 8, 0, 8, 18]
  const zIndexes = [1, 3, 5, 3, 1]
  return {
    transform: `translateX(${offset * 108}%) translateY(${lifts[index]}px) scale(${scales[index]})`,
    zIndex: zIndexes[index]
  }
}

const onHotGameClick = (index: number, game: StudioGame) => {
  if (index === hotCenterIndex) {
    window.open(game.url, '_blank', 'noopener,noreferrer')
    return
  }

  const offset = index - hotCenterIndex
  activeHotIndex.value = (activeHotIndex.value + offset + hotGames.length) % hotGames.length
}
</script>

<style scoped lang="scss">
.hot-games-all-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.55rem 0.95rem;
  border-radius: 0.45rem;
  background: linear-gradient(135deg, #dd57ff, #06b6d4);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(221, 87, 255, 0.28);
  }
}

.hot-games-stage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  padding: 1.5rem 0 0.5rem;
  overflow: hidden;

  @media (min-width: 640px) {
    min-height: 340px;
  }

  @media (min-width: 1024px) {
    min-height: 420px;
  }
}

.hot-game-card {
  position: absolute;
  width: min(42vw, 220px);
  aspect-ratio: 1 / 1;
  border: 0;
  padding: 0;
  border-radius: 1.25rem;
  overflow: hidden;
  cursor: pointer;
  background: #1f2937;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, filter 0.35s ease;
  filter: brightness(0.82);

  @media (min-width: 640px) {
    width: min(28vw, 260px);
    border-radius: 1.5rem;
  }

  @media (min-width: 1024px) {
    width: min(22vw, 300px);
  }

  &.is-center {
    filter: brightness(1);
    box-shadow: 0 28px 60px rgba(221, 87, 255, 0.28);
  }

  &.is-near {
    filter: brightness(0.9);
  }

  &.is-far {
    filter: brightness(0.72);
  }

  &:hover.is-center {
    box-shadow: 0 30px 70px rgba(221, 87, 255, 0.35);
  }
}

.hot-game-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hot-game-card__shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 35%, rgba(0, 0, 0, 0.78) 100%);
  pointer-events: none;
}

.hot-game-card__rating {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(8px);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 1.2;

  @media (min-width: 640px) {
    font-size: 0.78rem;
  }
}

.hot-game-card__meta {
  position: absolute;
  left: 0.9rem;
  right: 0.9rem;
  bottom: 0.9rem;
  text-align: left;
  color: #fff;
}

.hot-game-card__badge {
  display: inline-flex;
  align-items: center;
  margin-bottom: 0.4rem;
  padding: 0.18rem 0.5rem;
  border-radius: 0.35rem;
  background: linear-gradient(135deg, #dd57ff, #06b6d4);
  color: #fff;
  font-size: 0.68rem;
  font-weight: 700;
}

.hot-game-card__title {
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.25;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.55);

  @media (min-width: 640px) {
    font-size: 1.15rem;
  }

  .is-center & {
    font-size: 1.05rem;

    @media (min-width: 640px) {
      font-size: 1.35rem;
    }
  }
}

.hot-game-card__stats {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.35rem;
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.68rem;

  @media (min-width: 640px) {
    font-size: 0.78rem;
  }
}

.hot-game-card__play {
  width: 0;
  height: 0;
  border-top: 0.28rem solid transparent;
  border-bottom: 0.28rem solid transparent;
  border-left: 0.42rem solid #dd57ff;
  flex-shrink: 0;
}

@media (max-width: 639px) {
  .hot-game-card.is-far {
    opacity: 0;
    pointer-events: none;
  }

  .hot-game-card {
    width: min(58vw, 240px);
  }
}
</style>
