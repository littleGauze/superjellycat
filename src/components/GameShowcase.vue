<template>
  <section :class="hero ? 'hero-section' : 'section-spacing'">
    <div class="container-max">
      <div v-if="showBack" class="mb-8">
        <RouterLink
          to="/products"
          class="inline-flex items-center gap-2 text-gray-400 hover:text-jelly-400 transition-colors"
        >
          <span aria-hidden="true">←</span>
          返回全部游戏
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div class="relative order-2 lg:order-1">
          <div class="space-y-6">
            <div class="relative">
              <div class="aspect-[16/9] rounded-2xl overflow-hidden relative max-h-[600px] bg-gray-900/70">
                <img
                  :src="currentImage.image"
                  :alt="currentImage.title"
                  class="w-full h-full transition-all duration-500"
                  :class="currentImage.portrait ? 'object-contain' : 'object-cover'"
                >
                <div class="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40 pointer-events-none"></div>
                <div class="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p class="text-white text-sm font-medium">{{ currentImage.title }}</p>
                </div>

                <div v-if="game.videoUrl" class="absolute bottom-6 right-6">
                  <button
                    type="button"
                    class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                    @click="emit('play-video', game.videoUrl!)"
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

            <div class="relative">
              <div
                ref="thumbnailContainer"
                class="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
              >
                <button
                  v-for="(image, index) in game.images"
                  :key="image.image"
                  type="button"
                  class="flex-shrink-0 cursor-pointer group"
                  :class="{ 'ring-2 ring-jelly-400': currentIndex === index }"
                  @click="selectImage(index)"
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
                </button>
              </div>

              <div class="flex justify-center mt-4 space-x-2">
                <button
                  v-for="(_, index) in game.images"
                  :key="index"
                  type="button"
                  class="w-2 h-2 rounded-full transition-all duration-300"
                  :class="currentIndex === index ? 'bg-jelly-400 w-6' : 'bg-gray-600'"
                  @click="selectImage(index)"
                ></button>
              </div>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2 space-y-8">
          <div class="space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center gap-4">
              <div class="inline-block bg-jelly-500/20 px-3 py-1.5 rounded-full">
                <span class="text-jelly-400 font-medium text-sm">{{ badge }}</span>
              </div>
              <div class="flex gap-2 flex-wrap">
                <a
                  :href="game.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="platform-mini-btn bg-blue-500"
                >
                  <span class="text-xs">TapTap</span>
                </a>
                <TapTapStatsPills :rating="rating" :heat="heat" />
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-20 h-20 rounded-2xl overflow-hidden bg-gray-900/70 border border-white/10 shadow-xl shrink-0">
                <img
                  :src="game.cover"
                  :alt="`${game.title}logo`"
                  class="w-full h-full object-cover"
                >
              </div>
              <div>
                <h1
                  class="font-display font-bold text-white leading-tight"
                  :class="hero ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-3xl sm:text-4xl lg:text-5xl'"
                >
                  <span class="gradient-text">{{ game.title }}</span>
                </h1>
                <p class="text-xl text-gray-300 font-medium">{{ game.subtitle }}</p>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <p class="text-lg text-gray-300 leading-relaxed">
              {{ game.description }}
            </p>

            <div class="space-y-3">
              <div
                v-for="item in game.systems"
                :key="item"
                class="flex items-center space-x-3"
              >
                <div class="w-2 h-2 bg-jelly-400 rounded-full shrink-0"></div>
                <span class="text-gray-300">{{ item }}</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <a
              :href="game.url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary text-lg px-8 py-4"
            >
              前往 TapTap
            </a>
            <button
              v-if="game.videoUrl"
              type="button"
              class="btn-secondary text-lg px-8 py-4"
              @click="emit('play-video', game.videoUrl!)"
            >
              观看宣传片
            </button>
            <a
              v-if="game.bilibiliUrl"
              :href="game.bilibiliUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary text-lg px-8 py-4"
            >
              Bilibili
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import type { ProductGame } from '@/data/productCatalog'

const props = withDefaults(
  defineProps<{
    game: ProductGame
    rating: string
    heat: string
    badge?: string
    hero?: boolean
    showBack?: boolean
  }>(),
  {
    badge: '现已发布',
    hero: false,
    showBack: false
  }
)

const emit = defineEmits<{
  'play-video': [src: string]
}>()

const currentIndex = ref(0)
const thumbnailContainer = ref<HTMLElement>()

const currentImage = computed(() => props.game.images[currentIndex.value] || props.game.images[0])

watch(
  () => props.game.id,
  () => {
    currentIndex.value = 0
  }
)

const selectImage = (index: number) => {
  currentIndex.value = index
  nextTick(() => {
    const container = thumbnailContainer.value
    if (!container) return
    const item = container.children[index] as HTMLElement | undefined
    if (!item) return
    const targetLeft = item.offsetLeft - (container.clientWidth - item.clientWidth) / 2
    container.scrollTo({ left: targetLeft, behavior: 'smooth' })
  })
}
</script>
