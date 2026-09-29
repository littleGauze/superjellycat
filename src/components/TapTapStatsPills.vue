<template>
  <span class="taptap-stat-pill">{{ rating }}</span>
  <span class="taptap-stat-pill">{{ heat }}</span>
</template>

<script setup lang="ts">
defineProps<{
  rating: string
  heat: string
}>()
</script>

<style scoped>
.taptap-stat-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25;
  white-space: nowrap;
}
</style>
