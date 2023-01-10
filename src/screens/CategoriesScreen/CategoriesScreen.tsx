import CategoryGridTile from "components/CategoryGridTile";
import React from "react";
import { FlatList, View } from "react-native";
import { CATEGORIES } from "data/dummy-data";
import { useCallback } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<
  {
    MealsOverview: { categoryId: string };
  },
  "MealsOverview"
>;

function CategoriesScreen({ navigation }: Props) {
  const onPress = useCallback((categoryId: string) => {
    navigation.navigate("MealsOverview", { categoryId });
  }, []);

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={({ id }) => id}
      renderItem={({ item: { color, title, id } }) => (
        <CategoryGridTile
          color={color}
          title={title}
          onPress={() => onPress(id)}
        />
      )}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
