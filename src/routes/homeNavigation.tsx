import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../views/home/home";
import Settings from "../views/settings/settings";

export type StackHomeNavigation = {
  Home: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
