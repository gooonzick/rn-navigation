import { OpaqueColorValue, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: VoidFunction;
  color: string | OpaqueColorValue;
};

const IconButton = ({ icon, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <Ionicons name={icon} size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
