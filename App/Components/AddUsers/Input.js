import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ value, onChangeText, type, placeholder }) => {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor="black"
      placeholder={placeholder}
      keyboardType={type}
      value={value}
      onChangeText={onChangeText}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 20,
    borderWidth: 0.8,
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderColor: "#AEAEAE",
    marginVertical: 20,
  },
});
export default Input;
