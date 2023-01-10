import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  data: string[];
};

const List = ({ data }: Props) => {
  return (
    <>
      {data.map((el) => (
        <View key={el} style={styles.listItem}>
          <Text style={styles.itemText}>{el}</Text>
        </View>
      ))}
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
  },
});
