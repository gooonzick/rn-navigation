import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MealItem from "components/MealItem";
import MealList from "components/MealList/MealList";
import { CATEGORIES, MEALS } from "data/dummy-data";
import React, { useLayoutEffect } from "react";
import { useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "src/types";

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

function MealsOverviewScreen({ route, navigation }: Props) {
  const {
    params: { categoryId },
  } = route;

  const displayMeal = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((c) => c.id === categoryId).title,
    });
  }, []);

  const onPress = useCallback(
    (mealId: string, title: string) => {
      navigation.navigate("MealDetails", { mealId, title });
    },
    [navigation]
  );

  // так же можно получать инфу так
  console.log(route.params.categoryId);

  return (
    <View style={styles.screen}>
      <MealList displayMeal={displayMeal} />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
