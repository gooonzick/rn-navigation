import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  children: string;
};

const Subtitle = ({ children }: Props) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 24,
    padding: 6,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#e2b497",
  },
});
