import { defineStore } from "pinia";
import {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";
 
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import syrups from "../data/syrups.json";
import creamers from "../data/creamers.json";
 
export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases as BaseBeverageType[],
    currentBase: bases[1],
    syrups: syrups as SyrupType[],
    currentSyrup: syrups[1],
    creamers: creamers as CreamerType[],
    currentCreamer: creamers[1],
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    currentName: "",
  }),
 
  actions: {
    makeBeverage() {
      if (!this.currentName.trim()) {
        alert('Please give your beverage a name!');
        return;
      }

      this.currentBeverage = {
        name: this.currentName,
        id: `${this.currentBase.id}-${this.currentSyrup.id}-${this.currentCreamer.id}`,
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer,
      };
      this.beverages.push(this.currentBeverage);
      this.currentName = ''; // Reset name after creating beverage
    },
 
    showBeverage(beverage: BeverageType) {
      this.currentBeverage = beverage;
      this.currentName = beverage.name;
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentSyrup = beverage.syrup;
      this.currentCreamer = beverage.creamer;
    },
  },
 
  persist: true,
});