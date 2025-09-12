<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50">
    <nav class="container-max">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-3 group">
          <div class="w-10 h-10 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
            <img src="/images/superjellycat.png" alt="SuperJellyCat Logo" class="w-full h-full object-cover">
          </div>
          <div class="hidden sm:block">
            <h1 class="text-xl font-display font-bold gradient-text">SuperJellyCat</h1>
            <p class="text-xs text-gray-400">果冻猫侠工作室</p>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path"
            class="text-gray-300 hover:text-jelly-400 transition-colors duration-300 font-medium"
            :class="{ 'text-jelly-400': $route.path === item.path }"
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-gray-300 hover:text-jelly-400 transition-colors duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-show="isMobileMenuOpen"
        class="md:hidden border-t border-gray-800/50 bg-gray-900/95 backdrop-blur-md"
      >
        <div class="py-4 space-y-2">
          <RouterLink 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path"
            @click="closeMobileMenu"
            class="block px-4 py-2 text-gray-300 hover:text-jelly-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
            :class="{ 'text-jelly-400 bg-gray-800/50': $route.path === item.path }"
          >
            {{ item.name }}
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const navItems = [
  { name: '首页', path: '/' },
  { name: '产品', path: '/products' },
  { name: '关于我们', path: '/about' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
