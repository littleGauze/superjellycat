<template>
  <div id="app" class="min-h-screen bg-gray-900">
    <Header />
    <main class="pt-16">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
</script>
