import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MealItem from "components/MealItem";
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
      <FlatList
        data={displayMeal}
        keyExtractor={({ id }) => id}
        renderItem={({
          item: { id, title, imageUrl, duration, complexity, affordability },
        }) => (
          <MealItem
            title={title}
            imageUrl={imageUrl}
            duration={duration}
            complexity={complexity}
            affordability={affordability}
            onPress={() => onPress(id, title)}
          />
        )}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
