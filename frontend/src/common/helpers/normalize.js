import doughSizes from "@/common/data/doughSizes";
import sizes from "@/common/data/sizes";
import sauces from "@/common/data/sauces";
import ingredients from "@/common/data/ingredients";

export const normalizeDough = (dough) => {
  return {
    ...dough,
    value: doughSizes[dough.id],
  };
};

export const normalizeSize = (size) => {
  return {
    ...size,
    value: sizes[size.id],
  };
};

export const normalizeIngredient = (ingredient) => {
  return {
    ...ingredient,
    value: ingredients[ingredient.id],
  };
};

export const normalizeSauce = (sauce) => {
  return {
    ...sauce,
    value: sauces[sauce.id],
  };
};
