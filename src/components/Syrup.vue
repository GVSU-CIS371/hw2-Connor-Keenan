<template>
  <div class="syrup" :style="syrupStyle" v-if="selectedSyrup !== 'No Syrup'">
    <div class="drizzle" v-if="selectedSyrup !== 'No Syrup'" :style="drizzleStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Define props for the syrup type
const props = defineProps<{
  selectedSyrup?: string;
}>();

// Compute dynamic styles based on selected syrup
const syrupStyle = computed(() => {
  const styles: Record<string, string> = {};
  
  switch(props.selectedSyrup) {
    case 'Vanilla':
      styles.backgroundColor = 'rgba(250, 240, 230, 0.7)';
      break;
    case 'Caramel':
      styles.backgroundColor = 'rgba(195, 129, 84, 0.7)';
      break;
    case 'Hazelnut':
      styles.backgroundColor = 'rgba(161, 114, 85, 0.7)';
      break;
    default:
      styles.backgroundColor = '#c6c6c6'; // Default color from original
  }
  
  return styles;
});

// Compute dynamic drizzle styles based on selected syrup
const drizzleStyle = computed(() => {
  const styles: Record<string, string> = {};
  
  switch(props.selectedSyrup) {
    case 'Vanilla':
      styles.backgroundColor = 'rgba(250, 240, 230, 0.9)';
      break;
    case 'Caramel':
      styles.backgroundColor = 'rgba(195, 129, 84, 0.9)';
      break;
    case 'Hazelnut':
      styles.backgroundColor = 'rgba(161, 114, 85, 0.9)';
      break;
    default:
      styles.backgroundColor = '#c6c6c6';
  }
  
  return styles;
});
</script>

<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  background-color: #c6c6c6;
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
  transition: background-color 0.5s;
}

.drizzle {
  position: absolute;
  width: 60%;
  height: 35px;
  top: -30px;
  left: 20%;
  clip-path: polygon(
    0% 100%, 
    20% 0%, 
    25% 100%, 
    40% 50%, 
    45% 100%, 
    60% 20%, 
    65% 100%, 
    80% 40%, 
    85% 100%, 
    100% 10%, 
    100% 100%
  );
  transition: background-color 0.5s;
}
</style>
