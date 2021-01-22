import React from "react";
import { AppNavigator } from "App/Navigators/AppNavigator";
import { View } from "react-native";
import { Helpers } from "App/Theme";

const RootScreen = () => {
  return (
    <View style={Helpers.fill}>
      <AppNavigator />
    </View>
  );
};

export default RootScreen;
