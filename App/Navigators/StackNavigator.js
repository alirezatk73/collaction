import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Strings from "../Values/Strings";
import Users from "App/Containers/Users/UsersScreen";
import SplashScreen from "App/Containers/SplashScreen/SplashScreen";
import AddUserScreen from "../Containers/AddUser/AddUserScreen";
const Stack = createStackNavigator();
export const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={Strings.Routes.SPLASH_SCREEN}
        component={SplashScreen}
      />
      <Stack.Screen name={Strings.Routes.HOME_SCREEN} component={Users} />
      <Stack.Screen name={Strings.Routes.ADD_USER} component={AddUserScreen} />
    </Stack.Navigator>
  );
};
