<template>
  <div class="grid-background">
    <template v-if="game">
      <GameShowcase
        :game="game"
        :badge="game.id === latestProductGame.id ? '最新发布' : '现已发布'"
        hero
        show-back
        :rating="ratingText(game.appId)"
        :heat="heatText(game.appId)"
        @play-video="playVideo"
      />
    </template>

    <section v-else class="section-spacing">
      <div class="container-max text-center space-y-6">
        <h1 class="text-3xl font-display font-bold text-white">未找到该游戏</h1>
        <RouterLink to="/products" class="btn-primary inline-flex px-8 py-4">
          返回作品页
        </RouterLink>
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
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import GameShowcase from '@/components/GameShowcase.vue'
import { getProductGame, latestProductGame } from '@/data/productCatalog'
import { useTapTapStats } from '@/composables/useTapTapStats'
import { formatHeatCount, formatTapScore } from '@/utils/taptap'
import { allStudioGames } from '@/data/games'

const route = useRoute()
const game = computed(() => getProductGame(String(route.params.id || '')))

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

watch(
  () => route.params.id,
  () => {
    showVideoModal.value = false
    currentVideoSrc.value = ''
  }
)

const playVideo = (videoSrc: string) => {
  currentVideoSrc.value = videoSrc
  showVideoModal.value = true
}

const closeVideoModal = () => {
  showVideoModal.value = false
  if (videoPlayer.value) videoPlayer.value.pause()
}
</script>
