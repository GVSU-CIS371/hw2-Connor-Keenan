<template>
  <div>
    <Beverage 
      :isIced="beverageStore.currentTemp() === 'Cold'"
      :selectedBase="beverageStore.currentBase()"
      :selectedCreamer="beverageStore.currentCreamer()"
      :selectedSyrup="beverageStore.currentSyrup()"
    />
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              @change="updateTemp(temp)"
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
              :id="`b${base.id}`"
              :value="base.name"
              @change="updateBase(base.name)"
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
              :id="`s${syrup.id}`"
              :value="syrup.name"
              @change="updateSyrup(syrup.name)"
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
              :id="`c${creamer.id}`"
              :value="creamer.name"
              @change="updateCreamer(creamer.name)"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
    </ul>
    
    <input 
      type="text" 
      placeholder="Beverage Name" 
      :value="beverageStore.beverageName()"
      @input="updateName(($event.target as HTMLInputElement).value)"
    />
    <button @click="beverageStore.makeBeverage()">Make Beverage</button>
  
    <div id="beverage-container" style="margin-top: 20px">
      <div v-if="beverageStore.savedBeverages().length > 0">
        <template v-for="beverage in beverageStore.savedBeverages()" :key="beverage.id">
          <label>
            <input
              type="radio"
              name="savedBeverage"
              :checked="beverage.id === beverageStore.selectedBeverageId()"
              @click="beverageStore.showBeverage(beverage.id)"
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

// Methods to update store values
function updateTemp(temp: string) {
  beverageStore.setTemperature(temp);
}

function updateBase(base: string) {
  beverageStore.setBase(base);
}

function updateSyrup(syrup: string) {
  beverageStore.setSyrup(syrup);
}

function updateCreamer(creamer: string) {
  beverageStore.setCreamer(creamer);
}

function updateName(name: string) {
  beverageStore.setName(name);
}
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