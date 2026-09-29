<template>
  <div class="grid-background">
    <!-- 这地毯能爆金币展示 -->
    <section class="hero-section">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="relative order-2 lg:order-1">
            <div class="space-y-6">
              <div class="relative">
                <div class="aspect-[16/9] rounded-2xl overflow-hidden relative max-h-[600px] bg-gray-900/70">
                  <img
                    :src="currentFlipCoinImage.image"
                    :alt="currentFlipCoinImage.title"
                    class="w-full h-full transition-all duration-500"
                    :class="currentFlipCoinImage.portrait ? 'object-contain' : 'object-cover'"
                  >
                  <div class="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40 pointer-events-none"></div>
                  <div class="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p class="text-white text-sm font-medium">{{ currentFlipCoinImage.title }}</p>
                  </div>

                  <!-- 视频播放按钮（宣传片待上传：public/video/flip-coin.mp4） -->
                  <div class="absolute bottom-6 right-6">
                    <button
                      @click="playVideo(flipCoinVideoUrl)"
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

              <div class="relative">
                <div
                  class="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
                  ref="flipCoinThumbnailContainer"
                >
                  <div
                    v-for="(image, index) in flipCoinImages"
                    :key="image.image"
                    @click="selectFlipCoinImage(index)"
                    class="flex-shrink-0 cursor-pointer group"
                    :class="{ 'ring-2 ring-jelly-400': currentFlipCoinImageIndex === index }"
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
                    v-for="(_, index) in flipCoinImages"
                    :key="index"
                    @click="selectFlipCoinImage(index)"
                    class="w-2 h-2 rounded-full transition-all duration-300"
                    :class="currentFlipCoinImageIndex === index ? 'bg-jelly-400 w-6' : 'bg-gray-600'"
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
                  <a
                    :href="flipCoinTapTapUrl || undefined"
                    :target="flipCoinTapTapUrl ? '_blank' : undefined"
                    :rel="flipCoinTapTapUrl ? 'noopener noreferrer' : undefined"
                    class="platform-mini-btn bg-blue-500"
                    :class="{ 'pointer-events-none opacity-60': !flipCoinTapTapUrl }"
                  >
                    <span class="text-xs">TapTap</span>
                  </a>
                  <TapTapStatsPills :rating="ratingText(942322)" :heat="heatText(942322)" />
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-20 h-20 rounded-2xl overflow-hidden bg-gray-900/70 border border-white/10 shadow-xl">
                  <img
                    src="/images/games/flip-coin/logo.png"
                    alt="这地毯能爆金币logo"
                    class="w-full h-full object-cover"
                  >
                </div>
                <div>
                  <h1 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                    <span class="gradient-text">这地毯能爆金币</span>
                  </h1>
                  <p class="text-xl text-gray-300 font-medium">Flip Coin</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <p class="text-lg text-gray-300 leading-relaxed">
                《这地毯能爆金币》是一款轻松解压的竖屏像素风增量游戏。从一枚硬币开始，在神奇的魔毯上不断抛币、翻面、爆金币！赚到的钱可以购买更多硬币，雇佣兔兔、忍者、牛仔等员工，让他们帮你自动抛币、拾取金币。解锁不同魔毯、连锁翻币和各种强力技能，让满屋子的硬币越翻越快、金币越爆越多！打造属于你的全自动金币生产线，不断重生强化，开启下一轮疯狂暴富之旅！
              </p>

              <div class="space-y-3">
                <div
                  v-for="item in flipCoinSystems"
                  :key="item"
                  class="flex items-center space-x-3"
                >
                  <div class="w-2 h-2 bg-jelly-400 rounded-full"></div>
                  <span class="text-gray-300">{{ item }}</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <a
                v-if="flipCoinTapTapUrl"
                :href="flipCoinTapTapUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary text-lg px-8 py-4"
              >
                前往 TapTap
              </a>
              <span
                v-else
                class="btn-primary text-lg px-8 py-4 opacity-60 cursor-not-allowed"
              >
                前往 TapTap
              </span>
              <button @click="playVideo(flipCoinVideoUrl)" class="btn-secondary text-lg px-8 py-4">
                观看宣传片
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 吃我一记脑瓜崩展示 -->
    <section class="section-spacing">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="relative order-2 lg:order-2">
            <div class="space-y-6">
              <div class="relative">
                <div class="aspect-[16/9] rounded-2xl overflow-hidden relative max-h-[600px] bg-gray-900/70">
                  <img
                    :src="currentHeadFlickImage.image"
                    :alt="currentHeadFlickImage.title"
                    class="w-full h-full transition-all duration-500"
                    :class="currentHeadFlickImage.portrait ? 'object-contain' : 'object-cover'"
                  >
                  <div class="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40 pointer-events-none"></div>
                  <div class="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p class="text-white text-sm font-medium">{{ currentHeadFlickImage.title }}</p>
                  </div>

                  <!-- 视频播放按钮（宣传片待上传：public/video/head-flick.mp4） -->
                  <div class="absolute bottom-6 right-6">
                    <button
                      @click="playVideo(headFlickVideoUrl)"
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

              <div class="relative">
                <div
                  class="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
                  ref="headFlickThumbnailContainer"
                >
                  <div
                    v-for="(image, index) in headFlickImages"
                    :key="image.image"
                    @click="selectHeadFlickImage(index)"
                    class="flex-shrink-0 cursor-pointer group"
                    :class="{ 'ring-2 ring-jelly-400': currentHeadFlickImageIndex === index }"
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
                    v-for="(_, index) in headFlickImages"
                    :key="index"
                    @click="selectHeadFlickImage(index)"
                    class="w-2 h-2 rounded-full transition-all duration-300"
                    :class="currentHeadFlickImageIndex === index ? 'bg-jelly-400 w-6' : 'bg-gray-600'"
                  ></button>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-1 space-y-8">
            <div class="space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                <div class="inline-block bg-jelly-500/20 px-3 py-1.5 rounded-full">
                  <span class="text-jelly-400 font-medium text-sm">现已发布</span>
                </div>
                <div class="flex gap-2 flex-wrap">
                  <a
                    :href="headFlickTapTapUrl || undefined"
                    :target="headFlickTapTapUrl ? '_blank' : undefined"
                    :rel="headFlickTapTapUrl ? 'noopener noreferrer' : undefined"
                    class="platform-mini-btn bg-blue-500"
                    :class="{ 'pointer-events-none opacity-60': !headFlickTapTapUrl }"
                  >
                    <span class="text-xs">TapTap</span>
                  </a>
                  <TapTapStatsPills :rating="ratingText(923121)" :heat="heatText(923121)" />
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-20 h-20 rounded-2xl overflow-hidden bg-gray-900/70 border border-white/10 shadow-xl">
                  <img
                    src="/images/games/head-flick/logo.png"
                    alt="吃我一记脑瓜崩logo"
                    class="w-full h-full object-cover"
                  >
                </div>
                <div>
                  <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                    <span class="gradient-text">吃我一记脑瓜崩</span>
                  </h1>
                  <p class="text-xl text-gray-300 font-medium">Head Flick</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <p class="text-lg text-gray-300 leading-relaxed">
                《吃我一记脑瓜崩》是一款搞笑爽快的动作肉鸽游戏。操控蓝衣少年在怪物包围中移动、蓄力、弹指，把敌人狠狠弹飞！利用撞墙、敌人互撞与连锁爆炸清场，搭配随机强化技能，挑战越来越凶的精英与 Boss。
              </p>

              <div class="space-y-3">
                <div
                  v-for="item in headFlickSystems"
                  :key="item"
                  class="flex items-center space-x-3"
                >
                  <div class="w-2 h-2 bg-jelly-400 rounded-full"></div>
                  <span class="text-gray-300">{{ item }}</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <a
                v-if="headFlickTapTapUrl"
                :href="headFlickTapTapUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary text-lg px-8 py-4"
              >
                前往 TapTap
              </a>
              <span
                v-else
                class="btn-primary text-lg px-8 py-4 opacity-60 cursor-not-allowed"
              >
                前往 TapTap
              </span>
              <button @click="playVideo(headFlickVideoUrl)" class="btn-secondary text-lg px-8 py-4">
                观看宣传片
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 完美清洁公司展示 -->
    <section class="section-spacing">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="relative order-2 lg:order-1">
            <div class="space-y-6">
              <div class="relative">
                <div class="aspect-[16/9] rounded-2xl overflow-hidden relative max-h-[600px] bg-gray-900/70">
                  <img
                    :src="currentCleaningImage.image"
                    :alt="currentCleaningImage.title"
                    class="w-full h-full transition-all duration-500"
                    :class="currentCleaningImage.portrait ? 'object-contain' : 'object-cover'"
                  >
                  <div class="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40 pointer-events-none"></div>
                  <div class="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p class="text-white text-sm font-medium">{{ currentCleaningImage.title }}</p>
                  </div>

                  <!-- 视频播放按钮（宣传片待上传：public/video/perfect-cleaning-company.mp4） -->
                  <div class="absolute bottom-6 right-6">
                    <button
                      @click="playVideo(cleaningVideoUrl)"
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

              <div class="relative">
                <div
                  class="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
                  ref="cleaningThumbnailContainer"
                >
                  <div
                    v-for="(image, index) in cleaningImages"
                    :key="image.image"
                    @click="selectCleaningImage(index)"
                    class="flex-shrink-0 cursor-pointer group"
                    :class="{ 'ring-2 ring-jelly-400': currentCleaningImageIndex === index }"
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
                    v-for="(_, index) in cleaningImages"
                    :key="index"
                    @click="selectCleaningImage(index)"
                    class="w-2 h-2 rounded-full transition-all duration-300"
                    :class="currentCleaningImageIndex === index ? 'bg-jelly-400 w-6' : 'bg-gray-600'"
                  ></button>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2 space-y-8">
            <div class="space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                <div class="inline-block bg-jelly-500/20 px-3 py-1.5 rounded-full">
                  <span class="text-jelly-400 font-medium text-sm">现已发布</span>
                </div>
                <div class="flex gap-2 flex-wrap">
                  <a :href="cleaningTapTapUrl" target="_blank" rel="noopener noreferrer" class="platform-mini-btn bg-blue-500">
                    <span class="text-xs">TapTap</span>
                  </a>
                  <TapTapStatsPills :rating="ratingText(904067)" :heat="heatText(904067)" />
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-20 h-20 rounded-2xl overflow-hidden bg-gray-900/70 border border-white/10 shadow-xl">
                  <img
                    src="/images/games/perfect-cleaning-company/logo.png"
                    alt="完美清洁公司logo"
                    class="w-full h-full object-cover"
                  >
                </div>
                <div>
                  <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                    <span class="gradient-text">完美清洁公司</span>
                  </h1>
                  <p class="text-xl text-gray-300 font-medium">Perfect Cleaning Company</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <p class="text-lg text-gray-300 leading-relaxed">
                《完美清洁公司》是一款轻松解压的休闲清洁经营游戏。接取不同场景的限时订单，擦除污渍、分类垃圾、整理物品并清洗衣物，努力达成完美清洁评价。赚取报酬后升级工具、购置自动设备和清洁无人机，把小小清洁队经营成行业王牌！
              </p>

              <div class="space-y-3">
                <div
                  v-for="item in cleaningSystems"
                  :key="item"
                  class="flex items-center space-x-3"
                >
                  <div class="w-2 h-2 bg-jelly-400 rounded-full"></div>
                  <span class="text-gray-300">{{ item }}</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <a :href="cleaningTapTapUrl" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-4">
                前往 TapTap
              </a>
              <button @click="playVideo(cleaningVideoUrl)" class="btn-secondary text-lg px-8 py-4">
                观看宣传片
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 一锤子买卖展示 -->
    <section class="section-spacing">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="relative order-2 lg:order-2">
            <div class="space-y-6">
              <div class="relative">
                <div class="aspect-[16/9] rounded-2xl overflow-hidden relative max-h-[600px] bg-gray-900/70">
                  <img
                    :src="currentEggSmashImage.image"
                    :alt="currentEggSmashImage.title"
                    class="w-full h-full transition-all duration-500"
                    :class="currentEggSmashImage.portrait ? 'object-contain' : 'object-cover'"
                  >
                  <div class="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40 pointer-events-none"></div>
                  <div class="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p class="text-white text-sm font-medium">{{ currentEggSmashImage.title }}</p>
                  </div>

                  <!-- 视频播放按钮（宣传片待上传：public/video/golden-egg-smash.mp4） -->
                  <div class="absolute bottom-6 right-6">
                    <button
                      @click="playVideo(eggSmashVideoUrl)"
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

              <div class="relative">
                <div
                  class="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
                  ref="eggSmashThumbnailContainer"
                >
                  <div
                    v-for="(image, index) in eggSmashImages"
                    :key="image.image"
                    @click="selectEggSmashImage(index)"
                    class="flex-shrink-0 cursor-pointer group"
                    :class="{ 'ring-2 ring-jelly-400': currentEggSmashImageIndex === index }"
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
                    v-for="(_, index) in eggSmashImages"
                    :key="index"
                    @click="selectEggSmashImage(index)"
                    class="w-2 h-2 rounded-full transition-all duration-300"
                    :class="currentEggSmashImageIndex === index ? 'bg-jelly-400 w-6' : 'bg-gray-600'"
                  ></button>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-1 space-y-8">
            <div class="space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                <div class="inline-block bg-jelly-500/20 px-3 py-1.5 rounded-full">
                  <span class="text-jelly-400 font-medium text-sm">现已发布</span>
                </div>
                <div class="flex gap-2 flex-wrap">
                  <a :href="eggSmashTapTapUrl" target="_blank" rel="noopener noreferrer" class="platform-mini-btn bg-blue-500">
                    <span class="text-xs">TapTap</span>
                  </a>
                  <TapTapStatsPills :rating="ratingText(910424)" :heat="heatText(910424)" />
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-20 h-20 rounded-2xl overflow-hidden bg-gray-900/70 border border-white/10 shadow-xl">
                  <img
                    src="/images/games/golden-egg-smash/logo.png"
                    alt="一锤子买卖logo"
                    class="w-full h-full object-cover"
                  >
                </div>
                <div>
                  <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                    <span class="gradient-text">一锤子买卖</span>
                  </h1>
                  <p class="text-xl text-gray-300 font-medium">Golden Egg Smash</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <p class="text-lg text-gray-300 leading-relaxed">
                《一锤子买卖》是一款轻松爽快的增量敲蛋成长游戏。组合不同锤子卡，击碎不断成长的金蛋，触发连锁伤害、特殊蛋与 Boss 挑战。收集金币和黄金碎片，解锁永久成长，在无尽模式中不断刷新自己的伤害与财富记录。
              </p>

              <div class="space-y-3">
                <div
                  v-for="item in eggSmashSystems"
                  :key="item"
                  class="flex items-center space-x-3"
                >
                  <div class="w-2 h-2 bg-jelly-400 rounded-full"></div>
                  <span class="text-gray-300">{{ item }}</span>
                </div>
              </div>

              <p class="text-base text-gray-400 leading-relaxed">
                新增限时任务和赌石事件，可以更快提高财富，当然也有破产风险——锤下去，看看这一锤子能砸出多少！
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <a :href="eggSmashTapTapUrl" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-4">
                前往 TapTap
              </a>
              <button @click="playVideo(eggSmashVideoUrl)" class="btn-secondary text-lg px-8 py-4">
                观看宣传片
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 末日喋血双雄展示 -->
    <section class="section-spacing">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- 左侧：游戏画廊区域 -->
          <div class="relative order-2 lg:order-1">
            <div class="space-y-6">
              <div class="relative">
                <div class="aspect-[16/9] rounded-2xl overflow-hidden relative max-h-[600px] bg-gray-900/70">
                  <img
                    :src="currentBloodfallImage.image"
                    :alt="currentBloodfallImage.title"
                    class="w-full h-full object-cover transition-all duration-500"
                  >
                  <div class="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40 pointer-events-none"></div>
                  <div class="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p class="text-white text-sm font-medium">{{ currentBloodfallImage.title }}</p>
                  </div>

                  <!-- 视频播放按钮 -->
                  <div class="absolute bottom-6 right-6">
                    <button
                      @click="playVideo(bloodfallVideoUrl)"
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

              <div class="relative">
                <div
                  class="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
                  ref="bloodfallThumbnailContainer"
                >
                  <div
                    v-for="(image, index) in bloodfallImages"
                    :key="image.image"
                    @click="selectBloodfallImage(index)"
                    class="flex-shrink-0 cursor-pointer group"
                    :class="{ 'ring-2 ring-jelly-400': currentBloodfallImageIndex === index }"
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

                <div class="flex justify-center mt-4 space-x-2">
                  <button
                    v-for="(_, index) in bloodfallImages"
                    :key="index"
                    @click="selectBloodfallImage(index)"
                    class="w-2 h-2 rounded-full transition-all duration-300"
                    :class="currentBloodfallImageIndex === index ? 'bg-jelly-400 w-6' : 'bg-gray-600'"
                  ></button>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：游戏信息区域 -->
          <div class="order-1 lg:order-2 space-y-8">
            <div class="space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                <div class="inline-block bg-jelly-500/20 px-3 py-1.5 rounded-full">
                  <span class="text-jelly-400 font-medium text-sm">现已发布</span>
                </div>
                <div class="flex gap-2 flex-wrap">
                  <a :href="bloodfallTapTapUrl" target="_blank" rel="noopener noreferrer" class="platform-mini-btn bg-blue-500">
                    <span class="text-xs">TapTap</span>
                  </a>
                  <TapTapStatsPills :rating="ratingText(877529)" :heat="heatText(877529)" />
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-20 h-20 rounded-2xl overflow-hidden bg-gray-900/70 border border-white/10 shadow-xl">
                  <img
                    src="/images/games/bloodfallDuo/logo.png"
                    alt="末日喋血双雄logo"
                    class="w-full h-full object-cover"
                  >
                </div>
                <div>
                  <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                    <span class="gradient-text">末日喋血双雄</span>
                  </h1>
                  <p class="text-xl text-gray-300 font-medium">Bloodfall Duo</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <p class="text-lg text-gray-300 leading-relaxed">
                《末日喋血双雄》是一款横屏俯视角末日生存射击游戏。文明崩塌、异变怪物席卷荒野，你将独自作战或与好友并肩求生，在昼夜交替、天气变幻的开放战场中搜寻空投、收集武器、搭配护具与补给，迎战不断强化的尸潮、精英敌人与弹幕 Boss。
              </p>

              <div class="space-y-3">
                <div
                  v-for="item in bloodfallSystems"
                  :key="item"
                  class="flex items-center space-x-3"
                >
                  <div class="w-2 h-2 bg-jelly-400 rounded-full"></div>
                  <span class="text-gray-300">{{ item }}</span>
                </div>
              </div>

              <p class="text-base text-gray-400 leading-relaxed">
                探索随机事件，营救幸存者，利用短暂的白昼整备防线，并在危机四伏的黑夜中坚守到底。每一次出发都有不同的资源与挑战，末日生存、Boss 连战及排行榜玩法，更将持续考验你们的火力、配合与临场抉择。能否杀出重围，成为废土中最后的传奇双雄？
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <a :href="bloodfallTapTapUrl" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-4">
                前往 TapTap
              </a>
              <button @click="playVideo(bloodfallVideoUrl)" class="btn-secondary text-lg px-8 py-4">
                观看宣传片
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 弑神匕首展示 -->
    <section class="section-spacing">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="relative order-2 lg:order-2">
            <div class="space-y-6">
              <div class="relative">
                <div class="aspect-[16/9] rounded-2xl overflow-hidden relative max-h-[600px] bg-gray-900/70">
                  <img
                    :src="currentDaggerImage.image"
                    :alt="currentDaggerImage.title"
                    class="w-full h-full transition-all duration-500"
                    :class="currentDaggerImage.portrait ? 'object-contain' : 'object-cover'"
                  >
                  <div class="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40 pointer-events-none"></div>
                  <div class="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p class="text-white text-sm font-medium">{{ currentDaggerImage.title }}</p>
                  </div>

                  <!-- 视频播放按钮 -->
                  <div class="absolute bottom-6 right-6">
                    <button
                      @click="playVideo(daggerVideoUrl)"
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

              <div class="relative">
                <div
                  class="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
                  ref="daggerThumbnailContainer"
                >
                  <div
                    v-for="(image, index) in daggerImages"
                    :key="image.image"
                    @click="selectDaggerImage(index)"
                    class="flex-shrink-0 cursor-pointer group"
                    :class="{ 'ring-2 ring-jelly-400': currentDaggerImageIndex === index }"
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
                    v-for="(_, index) in daggerImages"
                    :key="index"
                    @click="selectDaggerImage(index)"
                    class="w-2 h-2 rounded-full transition-all duration-300"
                    :class="currentDaggerImageIndex === index ? 'bg-jelly-400 w-6' : 'bg-gray-600'"
                  ></button>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-1 space-y-8">
            <div class="space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                <div class="inline-block bg-jelly-500/20 px-3 py-1.5 rounded-full">
                  <span class="text-jelly-400 font-medium text-sm">现已发布</span>
                </div>
                <div class="flex gap-2 flex-wrap">
                  <a :href="daggerTapTapUrl" target="_blank" rel="noopener noreferrer" class="platform-mini-btn bg-blue-500">
                    <span class="text-xs">TapTap</span>
                  </a>
                  <TapTapStatsPills :rating="ratingText(872257)" :heat="heatText(872257)" />
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-20 h-20 rounded-2xl overflow-hidden bg-gray-900/70 border border-white/10 shadow-xl">
                  <img
                    src="/images/games/goldslayerDagger/logo.png"
                    alt="弑神匕首logo"
                    class="w-full h-full object-cover"
                  >
                </div>
                <div>
                  <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                    <span class="gradient-text">弑神匕首</span>
                  </h1>
                  <p class="text-xl text-gray-300 font-medium">Goldslayer Dagger</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <p class="text-lg text-gray-300 leading-relaxed">
                《弑神匕首》是一款融合法阵绘制、回合制战斗与 Roguelike 构筑的 2D 像素风肉鸽游戏。在伪神统治的黑暗时代，身为矿坑奴工的你意外获得一把传说中的弑神匕首，并觉醒了失落已久的法阵之力。
              </p>

              <div class="space-y-3">
                <div
                  v-for="item in daggerSystems"
                  :key="item"
                  class="flex items-center space-x-3"
                >
                  <div class="w-2 h-2 bg-jelly-400 rounded-full"></div>
                  <span class="text-gray-300">{{ item }}</span>
                </div>
              </div>

              <p class="text-base text-gray-400 leading-relaxed">
                收集匕首、宝石与挂饰，构筑专属流派，挑战天使、神使与伪神，最终踏上弑神之路。
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <a :href="daggerTapTapUrl" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-4">
                前往 TapTap
              </a>
              <button @click="playVideo(daggerVideoUrl)" class="btn-secondary text-lg px-8 py-4">
                观看宣传片
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 地球保卫计划展示 -->
    <section class="section-spacing">
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
                  <span class="text-jelly-400 font-medium text-sm">现已发布</span>
                </div>
                <div class="flex gap-2 flex-wrap">
                  <a :href="earthDefenseTapTapUrl" target="_blank" rel="noopener noreferrer" class="platform-mini-btn bg-blue-500">
                    <span class="text-xs">TapTap</span>
                  </a>
                  <TapTapStatsPills :rating="ratingText(867574)" :heat="heatText(867574)" />
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
          <!-- 右侧：游戏画廊区域 -->
          <div class="relative order-2 lg:order-2">
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

          <!-- 左侧：游戏信息区域 -->
          <div class="order-1 lg:order-1 space-y-8">
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
                    <TapTapStatsPills :rating="ratingText(802340)" :heat="heatText(802340)" />
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

          <!-- 右侧：游戏信息区域 -->
          <div class="order-1 lg:order-2 space-y-8">
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
                  <TapTapStatsPills :rating="ratingText(766679)" :heat="heatText(766679)" />
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
            <a :href="headFlickTapTapUrl || cleaningTapTapUrl" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-4">前往 TapTap</a>
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
import { allStudioGames } from '@/data/games'
import { useTapTapStats } from '@/composables/useTapTapStats'
import { formatHeatCount, formatTapScore } from '@/utils/taptap'

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

// 视频播放相关状态
const showVideoModal = ref(false)
const currentVideoSrc = ref('')
const videoPlayer = ref<HTMLVideoElement>()
const earthDefenseTapTapUrl = 'https://l.taptap.cn/rT2bFETp?channel=rep-rep_djitefuit5g'
const earthDefenseVideoUrl = '/video/earthDefenseInitiative.mp4'
const daggerTapTapUrl = 'https://l.taptap.cn/uTFNDi4B?channel=rep-rep_kqof5bro48z'
const daggerVideoUrl = '/video/goldslayerDagger.mp4'
const eggSmashTapTapUrl = 'https://tap.cn/Bdkma8m8'
const eggSmashVideoUrl = '/video/golden-egg-smash.mp4'
const bloodfallTapTapUrl = 'https://l.taptap.cn/x0dHwsJY?channel=rep-rep_j9ktjgag7ko'
const bloodfallVideoUrl = '/video/bloodfallDuo.mp4'
const cleaningTapTapUrl = 'https://tap.cn/1xKUO9Cl'
const cleaningVideoUrl = '/video/perfect-cleaning-company.mp4'
const headFlickTapTapUrl = 'https://tap.cn/mhHzvW1d'
const headFlickVideoUrl = '/video/head-flick.mp4'
const flipCoinTapTapUrl = 'https://tap.cn/RWuqb0Q9'
const flipCoinVideoUrl = '/video/flip-coin.mp4'

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


const flipCoinSystems = [
  '在魔毯上抛币、翻面、爆金币，开启暴富之旅',
  '雇佣兔兔、忍者、牛仔等员工自动抛币拾取',
  '解锁不同魔毯、连锁翻币与各种强力技能',
  '重生强化，打造属于你的全自动金币生产线'
]

const flipCoinImages = [
  { title: '游戏 Banner', image: '/images/games/flip-coin/banner.png', portrait: false },
  { title: '开始界面', image: '/images/games/flip-coin/IMG_5011.PNG', portrait: true },
  { title: '金币生产线', image: '/images/games/flip-coin/IMG_5012.PNG', portrait: true },
  { title: '雇佣员工', image: '/images/games/flip-coin/IMG_5013.PNG', portrait: true },
  { title: '升级强化', image: '/images/games/flip-coin/IMG_5014.PNG', portrait: true },
  { title: '解锁魔毯', image: '/images/games/flip-coin/IMG_5015.PNG', portrait: true },
  { title: '太极运势毯', image: '/images/games/flip-coin/IMG_5016.PNG', portrait: true },
  { title: '抛币翻面', image: '/images/games/flip-coin/IMG_5017.PNG', portrait: true },
  { title: '连锁爆金币', image: '/images/games/flip-coin/IMG_5018.PNG', portrait: true },
  { title: '重生技能', image: '/images/games/flip-coin/IMG_5019.PNG', portrait: true },
  { title: '重生技能树', image: '/images/games/flip-coin/IMG_5020.PNG', portrait: true }
]

const currentFlipCoinImageIndex = ref(0)
const flipCoinThumbnailContainer = ref<HTMLElement>()
const currentFlipCoinImage = computed(() => flipCoinImages[currentFlipCoinImageIndex.value])

const selectFlipCoinImage = (index: number) => {
  currentFlipCoinImageIndex.value = index
  nextTick(() => scrollThumbnailIntoView(flipCoinThumbnailContainer.value, index))
}

const headFlickSystems = [
  '移动、蓄力、弹指，把敌人狠狠弹飞',
  '利用撞墙、敌人互撞与连锁爆炸清场',
  '搭配随机强化技能构筑更强打法',
  '挑战越来越凶的精英与 Boss'
]

const headFlickImages = [
  { title: '游戏 Banner', image: '/images/games/head-flick/banner.png', portrait: false },
  { title: '蓄力弹指', image: '/images/games/head-flick/IMG_4878.PNG', portrait: true },
  { title: '敌人弹飞', image: '/images/games/head-flick/IMG_4879.PNG', portrait: true },
  { title: '撞墙清场', image: '/images/games/head-flick/IMG_4880.PNG', portrait: true },
  { title: '互撞连锁', image: '/images/games/head-flick/IMG_4881.PNG', portrait: true },
  { title: '爆炸连击', image: '/images/games/head-flick/IMG_4882.PNG', portrait: true },
  { title: '随机强化', image: '/images/games/head-flick/IMG_4886.PNG', portrait: true },
  { title: '精英挑战', image: '/images/games/head-flick/IMG_4887.PNG', portrait: true },
  { title: 'Boss 对决', image: '/images/games/head-flick/IMG_4888.PNG', portrait: true },
  { title: '肉鸽成长', image: '/images/games/head-flick/IMG_4889.PNG', portrait: true },
  { title: '爽快连弹', image: '/images/games/head-flick/IMG_4890.PNG', portrait: true }
]

const currentHeadFlickImageIndex = ref(0)
const headFlickThumbnailContainer = ref<HTMLElement>()
const currentHeadFlickImage = computed(() => headFlickImages[currentHeadFlickImageIndex.value])

const selectHeadFlickImage = (index: number) => {
  currentHeadFlickImageIndex.value = index
  nextTick(() => scrollThumbnailIntoView(headFlickThumbnailContainer.value, index))
}

const cleaningSystems = [
  '接取不同场景的限时订单，完成完美清洁',
  '擦除污渍、分类垃圾、整理物品并清洗衣物',
  '赚取报酬，升级工具与自动清洁设备',
  '购置清洁无人机，把小小清洁队经营成行业王牌'
]

const cleaningImages = [
  { title: '游戏 Banner', image: '/images/games/perfect-cleaning-company/banner.png', portrait: false },
  { title: '清洁工具', image: '/images/games/perfect-cleaning-company/IMG_4795.PNG', portrait: true },
  { title: '限时订单', image: '/images/games/perfect-cleaning-company/IMG_4804.PNG', portrait: true },
  { title: '擦除污渍', image: '/images/games/perfect-cleaning-company/IMG_4805.PNG', portrait: true },
  { title: '分类整理', image: '/images/games/perfect-cleaning-company/IMG_4806.PNG', portrait: true },
  { title: '清洗衣物', image: '/images/games/perfect-cleaning-company/IMG_4807.PNG', portrait: true },
  { title: '工具升级', image: '/images/games/perfect-cleaning-company/IMG_4808.PNG', portrait: true },
  { title: '自动设备', image: '/images/games/perfect-cleaning-company/IMG_4809.PNG', portrait: true },
  { title: '清洁无人机', image: '/images/games/perfect-cleaning-company/IMG_4811.PNG', portrait: true }
]

const currentCleaningImageIndex = ref(0)
const cleaningThumbnailContainer = ref<HTMLElement>()
const currentCleaningImage = computed(() => cleaningImages[currentCleaningImageIndex.value])

const selectCleaningImage = (index: number) => {
  currentCleaningImageIndex.value = index
  nextTick(() => scrollThumbnailIntoView(cleaningThumbnailContainer.value, index))
}

const bloodfallSystems = [
  '昼夜交替、天气变幻的开放战场',
  '单人作战或与好友双人组队求生',
  '搜寻空投，收集武器、护具与补给',
  '迎战尸潮、精英敌人与弹幕 Boss'
]

const bloodfallImages = [
  { title: '游戏 Banner', image: '/images/games/bloodfallDuo/banner.png' },
  { title: '双雄并肩', image: '/images/games/bloodfallDuo/IMG_4110.PNG' },
  { title: '白昼推进', image: '/images/games/bloodfallDuo/IMG_4622.PNG' },
  { title: '空投搜寻', image: '/images/games/bloodfallDuo/IMG_4623.PNG' },
  { title: '黑夜尸潮', image: '/images/games/bloodfallDuo/IMG_4616.PNG' },
  { title: '弹幕交火', image: '/images/games/bloodfallDuo/IMG_4618.PNG' },
  { title: '弹幕 Boss', image: '/images/games/bloodfallDuo/IMG_4626.PNG' },
  { title: 'Boss 连战', image: '/images/games/bloodfallDuo/IMG_4627.PNG' },
  { title: '荒野商人', image: '/images/games/bloodfallDuo/IMG_4621.PNG' },
  { title: '外骨骼改装', image: '/images/games/bloodfallDuo/IMG_4620.PNG' },
  { title: '无人机支援', image: '/images/games/bloodfallDuo/IMG_4624.PNG' },
  { title: '挑战模式与排行榜', image: '/images/games/bloodfallDuo/IMG_4602.PNG' }
]

const currentBloodfallImageIndex = ref(0)
const bloodfallThumbnailContainer = ref<HTMLElement>()
const currentBloodfallImage = computed(() => bloodfallImages[currentBloodfallImageIndex.value])

const selectBloodfallImage = (index: number) => {
  currentBloodfallImageIndex.value = index
  nextTick(() => scrollThumbnailIntoView(bloodfallThumbnailContainer.value, index))
}

const eggSmashSystems = [
  '组合不同锤子卡，击碎不断成长的金蛋',
  '触发连锁伤害、特殊蛋与 Boss 挑战',
  '收集金币与黄金碎片，解锁永久成长',
  '无尽模式不断刷新伤害与财富记录'
]

const eggSmashImages = [
  { title: '游戏 Banner', image: '/images/games/golden-egg-smash/banner.png', portrait: false },
  { title: '敲蛋开局', image: '/images/games/golden-egg-smash/1.png', portrait: true },
  { title: '锤子卡组合', image: '/images/games/golden-egg-smash/2.png', portrait: true },
  { title: '连锁伤害', image: '/images/games/golden-egg-smash/3.png', portrait: true },
  { title: '特殊金蛋', image: '/images/games/golden-egg-smash/4.png', portrait: true },
  { title: 'Boss 挑战', image: '/images/games/golden-egg-smash/5.png', portrait: true },
  { title: '永久成长', image: '/images/games/golden-egg-smash/6.png', portrait: true },
  { title: '财富积累', image: '/images/games/golden-egg-smash/7.png', portrait: true },
  { title: '限时任务', image: '/images/games/golden-egg-smash/8.png', portrait: true },
  { title: '无尽记录', image: '/images/games/golden-egg-smash/9.png', portrait: true }
]

const currentEggSmashImageIndex = ref(0)
const eggSmashThumbnailContainer = ref<HTMLElement>()
const currentEggSmashImage = computed(() => eggSmashImages[currentEggSmashImageIndex.value])

const selectEggSmashImage = (index: number) => {
  currentEggSmashImageIndex.value = index
  nextTick(() => scrollThumbnailIntoView(eggSmashThumbnailContainer.value, index))
}

const daggerSystems = [
  '亲手绘制法阵，发动攻击、防御或诅咒',
  '图形与面积匹配度决定法阵威力',
  '收集匕首、宝石与挂饰，构筑专属流派',
  '回合制战斗，挑战天使、神使与伪神'
]

const daggerImages = [
  { title: '游戏 Banner', image: '/images/games/goldslayerDagger/banner_hov.png', portrait: false },
  { title: '法阵绘制', image: '/images/games/goldslayerDagger/1.webp', portrait: true },
  { title: '回合制战斗', image: '/images/games/goldslayerDagger/2.webp', portrait: true },
  { title: '像素风场景', image: '/images/games/goldslayerDagger/3.webp', portrait: true },
  { title: '匕首收集', image: '/images/games/goldslayerDagger/4.webp', portrait: true },
  { title: '宝石构筑', image: '/images/games/goldslayerDagger/5.webp', portrait: true },
  { title: '挂饰搭配', image: '/images/games/goldslayerDagger/6.webp', portrait: true },
  { title: 'Boss 对决', image: '/images/games/goldslayerDagger/7.webp', portrait: true },
  { title: '弑神之路', image: '/images/games/goldslayerDagger/8.webp', portrait: true },
  { title: '流派构筑', image: '/images/games/goldslayerDagger/9.webp', portrait: true }
]

const currentDaggerImageIndex = ref(0)
const daggerThumbnailContainer = ref<HTMLElement>()
const currentDaggerImage = computed(() => daggerImages[currentDaggerImageIndex.value])

const selectDaggerImage = (index: number) => {
  currentDaggerImageIndex.value = index
  nextTick(() => scrollThumbnailIntoView(daggerThumbnailContainer.value, index))
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
</script>
