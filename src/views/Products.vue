<template>
  <div class="grid-background">
    <GameShowcase
      :game="latestGame"
      badge="最新发布"
      hero
      :rating="ratingText(latestGame.appId)"
      :heat="heatText(latestGame.appId)"
      @play-video="playVideo"
    />

    <section class="section-spacing">
      <div class="container-max">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 class="text-3xl sm:text-4xl font-display font-bold text-white">全部游戏</h2>
            <p class="mt-2 text-gray-400">共 {{ productCatalog.length }} 款作品，点击查看详情</p>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          <RouterLink
            v-for="game in productCatalog"
            :key="game.id"
            :to="`/products/${game.id}`"
            class="game-card group"
          >
            <div class="game-card__media">
              <img
                :src="game.cover"
                :alt="game.title"
                class="game-card__image"
                loading="lazy"
              >
              <div v-if="game.id === latestGame.id" class="game-card__badge">最新</div>
            </div>
            <div class="game-card__body">
              <h3 class="game-card__title">{{ game.title }}</h3>
              <p v-if="game.tagline" class="game-card__tagline">{{ game.tagline }}</p>
              <p class="game-card__stats">
                {{ ratingText(game.appId) }} · {{ heatText(game.appId) }}
              </p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section-spacing bg-gray-800/30">
      <div class="container-max text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl font-display font-bold gradient-text mb-6">准备开始冒险了吗？</h2>
          <p class="text-xl text-gray-300 mb-8">
            加入我们的游戏世界，体验独特的冒险之旅
          </p>
          <div class="flex justify-center">
            <a
              :href="latestGame.url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary text-lg px-8 py-4"
            >
              前往 TapTap
            </a>
          </div>
        </div>
      </div>
    </section>

    <div
      v-if="showVideoModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      @click="closeVideoModal"
    >
      <div class="relative w-full max-w-4xl mx-4" @click.stop>
        <button
          type="button"
          class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
          @click="closeVideoModal"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
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
import { ref } from 'vue'
import GameShowcase from '@/components/GameShowcase.vue'
import { latestProductGame, productCatalog } from '@/data/productCatalog'
import { useTapTapStats } from '@/composables/useTapTapStats'
import { formatHeatCount, formatTapScore } from '@/utils/taptap'
import { allStudioGames } from '@/data/games'

const latestGame = latestProductGame
const { getStat, loading: statsLoading } = useTapTapStats(allStudioGames)

const ratingText = (appId: number) => {
  const stat = getStat(appId)
  if (!stat && statsLoading.value) return '评分加载中…'
  return formatTapScore(stat?.score)
}

const heatText = (appId: number) => {
  const stat = getStat(appId)
  if (!stat && statsLoading.value) return '热度加载中…'
  if (!stat) return '热度 --'
  return formatHeatCount(stat.heatCount)
}

const showVideoModal = ref(false)
const currentVideoSrc = ref('')
const videoPlayer = ref<HTMLVideoElement>()

const playVideo = (videoSrc: string) => {
  currentVideoSrc.value = videoSrc
  showVideoModal.value = true
}

const closeVideoModal = () => {
  showVideoModal.value = false
  if (videoPlayer.value) videoPlayer.value.pause()
}
</script>

<style scoped lang="scss">
.game-card {
  display: block;
  overflow: hidden;
  border-radius: 0.75rem;
  background: rgba(17, 24, 39, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(221, 87, 255, 0.35);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
  }
}

.game-card__media {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #111827;
}

.game-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.game-card:hover .game-card__image {
  transform: scale(1.04);
}

.game-card__badge {
  position: absolute;
  top: 0.45rem;
  left: 0.45rem;
  padding: 0.12rem 0.4rem;
  border-radius: 0.3rem;
  background: linear-gradient(135deg, #dd57ff, #06b6d4);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
}

.game-card__body {
  padding: 0.65rem 0.7rem 0.85rem;
}

.game-card__title {
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.game-card__tagline {
  margin-top: 0.2rem;
  color: rgba(209, 213, 219, 0.85);
  font-size: 0.7rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.game-card__stats {
  margin-top: 0.4rem;
  color: rgba(156, 163, 175, 0.95);
  font-size: 0.65rem;
}
</style>
