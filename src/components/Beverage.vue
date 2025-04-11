<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <!-- Only show creamer if it's not "No Creamer" -->
        <Creamer 
          v-if="selectedCreamer !== 'No Creamer'"
          :selectedCreamer="selectedCreamer"
          :noSyrup="selectedSyrup === 'No Syrup'"
        />
      </template>
      <template v-slot:mid>
        <!-- Only show syrup if it's not "No Syrup" -->
        <Syrup 
          v-if="selectedSyrup !== 'No Syrup'"
          :selectedSyrup="selectedSyrup"
        />
      </template>
      <template v-slot:bottom>
        <Base :selectedBase="selectedBase" />
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
  selectedBase?: string;
  selectedCreamer?: string;
  selectedSyrup?: string;
};
defineProps<Props>();
</script>