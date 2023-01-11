import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/types";
import { MEALS } from "data/dummy-data";
import MealDetails from "components/MealDetails";
import Subtitle from "components/Subtitle";
import List from "components/List/List";
import IconButton from "components/IconButton";

type Props = NativeStackScreenProps<RootStackParamList, "MealDetails">;

const MealDetailsScreen = ({ route, navigation }: Props) => {
  const {
    params: { mealId },
  } = route;

  const onSave = useCallback(() => {
    console.log("save");
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton icon="star" onPress={onSave} color="white" />
      ),
    });
  }, []);

  const selectedMeal = MEALS.find((m) => m.id === mealId);

  return (
    <ScrollView style={styles.screen}>
      <Image
        style={styles.image}
        source={{ uri: selectedMeal.imageUrl }}
        resizeMode="cover"
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailText}
      />
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps} />
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
});
