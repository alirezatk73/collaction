import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "App/Theme";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default StyleSheet.create({
  flatlistContainer: { marginTop: hp(5), paddingBottom: hp(2) },
  headerFlatlist: {
    ...Fonts.h4,
    padding: 25,
    color: Colors.gray,
  },

  result: {
    ...Fonts.input,
    top: hp(5),
    textAlign: "center",
  },
  text: {
    ...Fonts.h2,
    marginTop: hp(7),
    textAlign: "center",
  },
});
