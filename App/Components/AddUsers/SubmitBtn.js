import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Helpers, Colors, Fonts } from "App/Theme";

function SubmitBtn({ onPress, isEdit }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{!isEdit ? "Register" : "Update"}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    ...Helpers.rowCenter,
    alignSelf: "center",
    width: "90%",
    paddingVertical: 23,
    backgroundColor: Colors.purple,
    marginTop: "20%",
    borderRadius: 25,
  },
  btnText: {
    ...Fonts.h5,
    color: Colors.white,
    textTransform: "uppercase",
  },
});

export default SubmitBtn;
