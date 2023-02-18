import { defineStore } from "pinia";
import doughJSON from "@/mocks/dough.json";
import {
  normalizeDough,
  normalizeIngredient,
  normalizeSauce,
  normalizeSize,
} from "@/common/helpers/normalize";
import ingredientsJSON from "@/mocks/ingredients.json";
import saucesJSON from "@/mocks/sauces.json";
import sizesJSON from "@/mocks/sizes.json";
import miscJSON from "@/mocks/misc.json";

export const useDataStore = defineStore("data", {
  state: () => ({
    doughs: doughJSON.map(normalizeDough),
    ingredients: ingredientsJSON.map(normalizeIngredient),
    sauces: saucesJSON.map(normalizeSauce),
    sizes: sizesJSON.map(normalizeSize),
    misc: miscJSON,
  }),
  getters: {},
  actions: {},
});
