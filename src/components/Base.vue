<template>
  <div class="baseBeverage" :style="baseStyle"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Define props for the base beverage type
const props = defineProps<{
  selectedBase?: string
}>();

// Compute dynamic styles based on selected base beverage
const baseStyle = computed(() => {
  const styles: Record<string, string> = {};
  
  switch(props.selectedBase) {
    case 'Coffee':
      styles.backgroundColor = '#3c2314';
      styles.backgroundImage = 'linear-gradient(to bottom, #2b1a0e, #3c2314)';
      break;
    case 'Green Tea':
      styles.backgroundColor = '#b7c9a1';
      styles.backgroundImage = 'linear-gradient(to bottom, #a6ba8e, #b7c9a1)';
      break;
    case 'Black Tea':
      styles.backgroundColor = '#763c28';
      styles.backgroundImage = 'linear-gradient(to bottom, #612f1e, #763c28)';
      break;
    default:
      // Default to coffee if no selection or unknown selection
      styles.backgroundColor = '#3c2314';
      styles.backgroundImage = 'linear-gradient(to bottom, #2b1a0e, #3c2314)';
  }
  
  return styles;
});
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
  transition: background-color 0.5s, background-image 0.5s;
}
</style>
