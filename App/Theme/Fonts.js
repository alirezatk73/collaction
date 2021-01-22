import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const size = {
  h1: wp(8),
  h2: wp(7),
  h3: wp(6),
  h4: wp(5),
  input: wp(4),
  regular: wp(3),
  medium: wp(2),
  small: wp(1),
};

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
    fontFamily: "Poppins-Bold",
  },
  h2: {
    fontSize: size.h2,
    fontFamily: "Poppins-Bold",
  },
  h3: {
    fontSize: size.h3,
    fontFamily: "Poppins-Bold",
  },
  h4: {
    fontSize: size.h4,
    fontFamily: "Poppins-Regular",
  },
  input: {
    fontSize: size.input,
    fontFamily: "Poppins-Regular",
  },
  normal: {
    fontSize: size.regular,
    fontFamily: "Poppins-Regular",
  },
  medium: {
    fontSize: size.medium,
    fontFamily: "Poppins-Light",
  },
  small: {
    fontSize: size.small,
    fontFamily: "Poppins-Light",
  },
});
