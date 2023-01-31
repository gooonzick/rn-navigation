import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import Meal from "models/Meals";
import MealItem from "components/MealItem";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "src/types";

type Props = {
  displayMeal: Meal[];
};

const MealList = ({ displayMeal }: Props) => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "MealDetails">>();

  const onPress = useCallback(
    (mealId: string, title: string) => {
      navigation.navigate("MealDetails", { mealId, title });
    },
    [navigation]
  );
  return (
    <View>
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
};

export default MealList;

const styles = StyleSheet.create({});
