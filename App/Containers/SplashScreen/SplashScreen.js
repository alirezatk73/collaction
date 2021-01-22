import React, { useEffect } from "react";
import { Text } from "react-native";
import styles from "./SplashScreenStyle";
import { Helpers, Images } from "App/Theme";
import FastImage from "react-native-fast-image";
import { useNavigation } from "@react-navigation/native";
import Strings from "../../Values/Strings";
import { View } from "react-native-animatable";

const SplashScreen = (props) => {
  const { navigate } = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate(Strings.Routes.HOME_SCREEN);
    }, 3000);
  }, []);
  return (
    <View style={[Helpers.fillRowCenter, styles.container]}>
      <View
        animation="fadeIn"
        useNativeDriver
        duration={2500}
        style={[Helpers.center, styles.logo]}
      >
        <FastImage style={{ width: 300, height: 300 }} source={Images.logo} />
      </View>
    </View>
  );
};
export default SplashScreen;
