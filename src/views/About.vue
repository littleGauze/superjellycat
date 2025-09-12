<template>
  <div>
    <!-- About Developer Section -->
    <section class="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div class="container-max">
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">关于我们</h1>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="glass-card p-8">
            <!-- 开发者信息 -->
            <div class="text-center mb-8">
              <div class="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-jelly-500/30">
                <img 
                  src="/src/assets/images/Avatar.jpg" 
                  alt="SuperJellyCat 开发者头像" 
                  class="w-full h-full object-cover"
                >
              </div>
              <h3 class="text-3xl font-semibold text-white mb-2">SuperJellyCat</h3>
              <p class="text-jelly-400 font-medium text-lg mb-6">独立游戏开发者</p>
            </div>
            
            <!-- 我们的故事 -->
            <div class="space-y-6 text-gray-300 leading-relaxed">
              <p>
                果冻猫侠工作室成立于2024年，是一个专注于独立游戏开发的个人工作室。我相信游戏不仅仅是娱乐，
                更是一种艺术形式，能够传达情感、讲述故事、连接人心。
              </p>
              <p>
                作为独立开发者，我倾注心血于游戏的每一个细节，从概念设计到程序开发，从美术创作到音效制作，
                致力于为玩家创造独特而难忘的游戏体验。
              </p>
              <p>
                从已发布的《小小御剑士》到正在开发的《救救农场吧》，我始终坚持创新和品质。每一款游戏都是我创作心血的结晶，
                致力于探索不同的游戏类型和主题，希望通过它们为玩家带来快乐、启发、感动以及多样化的游戏体验。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-spacing bg-gray-800/30">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold gradient-text mb-4">我们的价值观</h2>
          <p class="text-xl text-gray-300">指导我们工作的核心原则</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="value in values" :key="value.title" class="card text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-jelly-400 to-jelly-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <span class="text-white font-bold text-xl">{{ value.icon }}</span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">{{ value.title }}</h3>
            <p class="text-gray-300">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>


    <!-- Stats Section -->
    <section class="section-spacing bg-gray-800/30">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold gradient-text mb-4">我们的成就</h2>
          <p class="text-xl text-gray-300">数字见证我们的成长</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl md:text-5xl font-bold gradient-text mb-2">{{ stat.value }}</div>
            <div class="text-gray-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

const values = [
  {
    title: '创新',
    description: '始终追求创新，不断探索新的游戏机制和创意表达方式',
    icon: '💡'
  },
  {
    title: '品质',
    description: '对每一个细节都精益求精，确保为玩家提供最高品质的游戏体验',
    icon: '⭐'
  },
  {
    title: '专注',
    description: '专注于独立游戏开发，用心打造每一款游戏，为玩家带来独特体验',
    icon: '🎯'
  }
]


const stats = [
  { value: '1+', label: '年经验' },
  { value: '2', label: '游戏项目' },
  { value: '1', label: '独立开发者' },
  { value: '∞', label: '创作热情' }
]
</script>
