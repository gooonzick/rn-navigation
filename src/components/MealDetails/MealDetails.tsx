import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";

type Props = {
  duration: number;
  affordability: string;
  complexity: string;
  textStyle?: StyleProp<TextStyle>;
};

const MealDetails = ({
  duration,
  complexity,
  affordability,
  textStyle,
}: Props) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 12,
    fontSize: 12,
  },
});
