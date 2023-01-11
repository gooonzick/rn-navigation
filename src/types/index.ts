import React from "react";

export type RootStackParamList = {
  Categories: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: {
    mealId: string;
    title?: string;
  };
};
