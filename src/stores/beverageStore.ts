import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import tempretures from '../data/tempretures.json';
import bases from '../data/bases.json';
import syrups from '../data/syrups.json';
import creamers from '../data/creamers.json';

// Explicit type for ingredients
interface Ingredient {
  id: string;
  name: string;
  color?: string;
}

// Define the type for a beverage recipe
interface BeverageRecipe {
  id: number;
  name: string;
  base: string;
  creamer: string;
  syrup: string;
  temperature: string;
}

export const useBeverageStore = defineStore('BeverageStore', () => {
  // State
  const currentBase = ref(bases[0].name);
  const currentCreamer = ref(creamers[0].name);
  const currentSyrup = ref(syrups[0].name);
  const currentTemp = ref(tempretures[0]);
  const beverageName = ref('');
  const savedBeverages = ref<BeverageRecipe[]>([]);
  const selectedBeverageId = ref<number | null>(null);

  // Actions
  function setBase(base: string) {
    if (bases.some(b => b.name === base)) {
      currentBase.value = base;
    }
  }

  function setCreamer(creamer: string) {
    if (creamers.some(c => c.name === creamer)) {
      currentCreamer.value = creamer;
    }
  }

  function setSyrup(syrup: string) {
    if (syrups.some(s => s.name === syrup)) {
      currentSyrup.value = syrup;
    }
  }

  function setTemperature(temp: string) {
    if (tempretures.includes(temp)) {
      currentTemp.value = temp;
    }
  }

  function setName(name: string) {
    beverageName.value = name;
  }

  function makeBeverage() {
    if (!beverageName.value.trim()) {
      alert('Please give your beverage a name!');
      return;
    }

    const newBeverage: BeverageRecipe = {
      id: Date.now(),
      name: beverageName.value,
      base: currentBase.value,
      creamer: currentCreamer.value,
      syrup: currentSyrup.value,
      temperature: currentTemp.value
    };

    savedBeverages.value.push(newBeverage);
    beverageName.value = ''; // Reset name field after saving
    selectedBeverageId.value = newBeverage.id; // Auto-select the new beverage
  }

  function showBeverage(id: number) {
    const beverage = savedBeverages.value.find(b => b.id === id);
    if (beverage) {
      currentBase.value = beverage.base;
      currentCreamer.value = beverage.creamer;
      currentSyrup.value = beverage.syrup;
      currentTemp.value = beverage.temperature;
      selectedBeverageId.value = id;
    }
  }

  // Getters
  const isIced = computed(() => currentTemp.value === 'Cold');
  const selectedBeverage = computed(() => 
    savedBeverages.value.find(b => b.id === selectedBeverageId.value) || null
  );

  return {
    // Destructure and convert refs to their values
    currentBase: () => currentBase.value,
    currentCreamer: () => currentCreamer.value,
    currentSyrup: () => currentSyrup.value,
    currentTemp: () => currentTemp.value,
    beverageName: () => beverageName.value,
    savedBeverages: () => savedBeverages.value,
    selectedBeverageId: () => selectedBeverageId.value,

    // Methods
    setBase,
    setCreamer,
    setSyrup,
    setTemperature,
    setName,
    makeBeverage,
    showBeverage,

    // Additional data
    bases: bases as Ingredient[],
    creamers: creamers as Ingredient[],
    syrups: syrups as Ingredient[],
    temps: tempretures,

    // Getters
    isIced: () => isIced.value,
    selectedBeverage: () => selectedBeverage.value
  };
});