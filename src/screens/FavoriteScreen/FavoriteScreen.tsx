import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealList from "components/MealList/MealList";
import { useFavoriteIdsContext } from "store/context";
import { MEALS } from "data/dummy-data";

const FavoriteScreen = () => {
  const { ids } = useFavoriteIdsContext();

  const displayMeal = ids.map((mealId) => MEALS.find((m) => m.id === mealId));

  if (displayMeal.length === 0) {
    return (
      <View style={[styles.screen, styles.emptyScreen]}>
        <Text style={styles.text}>You don't have fav meal yet</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <MealList displayMeal={displayMeal} />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  emptyScreen: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
