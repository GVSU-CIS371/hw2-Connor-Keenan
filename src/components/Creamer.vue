<template>
  <div class="froth" :style="creamerStyle" v-if="selectedCreamer !== 'No Creamer'">
    <div v-for=" in 5" class="foam" :style="foamStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Define props for the creamer type and syrup status
const props = defineProps<{
  selectedCreamer?: string;
  noSyrup?: boolean;
}>();

// Compute dynamic styles based on selected creamer
const creamerStyle = computed(() => {
  const styles: Record<string, string> = {};
  
  switch(props.selectedCreamer) {
    case 'Milk':
      styles.backgroundColor = '#e8e8e8';
      break;
    case 'Cream':
      styles.backgroundColor = '#f0e6cc';
      break;
    case 'Half & Half':
      styles.backgroundColor = '#f5e9d0';
      break;
    default:
      styles.backgroundColor = '#c6c6c6'; // Default color from original
  }
  
  // Adjust position based on whether syrup is present
  if (props.noSyrup) {
    styles.transform = 'translateY(400%)';
  } else {
    styles.transform = 'translateY(350%)';
  }
  
  return styles;
});

// Compute dynamic foam styles based on selected creamer
const foamStyle = computed(() => {
  const styles: Record<string, string> = {};
  
  switch(props.selectedCreamer) {
    case 'Milk':
      styles.background = '#f0f0f0';
      break;
    case 'Cream':
      styles.background = '#f8f0dd';
      break;
    case 'Half & Half':
      styles.background = '#f9f0dd';
      break;
    default:
      styles.background = '#e4e0d2'; // Default color from original
  }
  
  return styles;
});
</script>

<style lang="scss" scoped>
.froth {
  overflow: visible;
  transform: translateY(400%);
  position: relative;
  height: 20%;
  width: 100%;
  background-color: #c6c6c6;
  animation: pour-tea 2s 2s forwards;
  transition: background-color 0.5s, transform 0.5s;
}
.foam {
  display: block;
  background: #e4e0d2;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  position: absolute;
  transition: background 0.5s;
}

.foam:nth-child(1) {
  top: 0px;
  left: -3px;
}

.foam:nth-child(2) {
  top: 0px;
  left: 55px;
}

.foam:nth-child(3) {
  width: 30px;
  height: 30px;
  border-radius: 40px;
  top: 3px;
  left: 30px;
}

.foam:nth-child(4) {
  width: 30px;
  height: 30px;
  border-radius: 45px;
  top: 5px;
  right: -2px;
}

.foam:nth-child(5) {
  top: 2px;
  right: 10px;
}
</style>