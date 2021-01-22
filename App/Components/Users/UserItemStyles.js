import { StyleSheet } from "react-native";
import { Helpers, Fonts } from "App/Theme";

const styles = StyleSheet.create({
  row: {
    ...Helpers.rowCenter,
    justifyContent: "space-between",
    width: "95%",
  },
  nameIconWrap: {
    ...Helpers.rowCenter,
    padding: 20,
  },
  name: {
    ...Fonts.input,
    paddingHorizontal: 15,
  },
  iconWrap: {
    ...Helpers.rowCenter,
  },
});

export default styles;
