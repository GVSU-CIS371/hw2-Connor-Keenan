<template>
  <div>
    <Beverage 
      :isIced="beverageStore.currentTemp === 'Cold'"
    />
    
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :value="temp"
              :checked="beverageStore.currentTemp === temp"
              @change="beverageStore.currentTemp = temp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      
      <li>
        <template v-for="base in beverageStore.bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="baseBeverage"
              :value="base"
              :checked="beverageStore.currentBase.id === base.id"
              @change="beverageStore.currentBase = base"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
      
      <li>
        <template v-for="syrup in beverageStore.syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :value="syrup"
              :checked="beverageStore.currentSyrup.id === syrup.id"
              @change="beverageStore.currentSyrup = syrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
      
      <li>
        <template v-for="creamer in beverageStore.creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :value="creamer"
              :checked="beverageStore.currentCreamer.id === creamer.id"
              @change="beverageStore.currentCreamer = creamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
    </ul>
    
    <input 
      type="text" 
      placeholder="Beverage Name" 
      v-model="beverageStore.currentName"
    />
    <button @click="beverageStore.makeBeverage()">Make Beverage</button>
  
    <div id="beverage-container" style="margin-top: 20px">
      <div v-if="beverageStore.beverages.length > 0">
        <template v-for="beverage in beverageStore.beverages" :key="beverage.id">
          <label>
            <input
              type="radio"
              name="savedBeverage"
              :value="beverage"
              :checked="beverageStore.currentBeverage?.id === beverage.id"
              @change="beverageStore.showBeverage(beverage)"
            />
            {{ beverage.name }}
          </label>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();
</script>
<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}

input[type="text"] {
  padding: 6px;
  margin-right: 10px;
}

button {
  padding: 6px 12px;
}
</style>