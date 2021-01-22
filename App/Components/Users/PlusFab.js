import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "App/Theme";
import { Plus } from "../../Assets/Images/svg";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const PlusFab = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrap}>
      <Plus />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    bottom: hp(25),
    right: 10,
    backgroundColor: Colors.purple,
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlusFab;
