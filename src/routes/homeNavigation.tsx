import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../views/home/home";
import CreateGoal from "../views/home/createGoal";

export type StackHomeNavigation = {
  Home: undefined;
  "Create Goal": undefined;
};

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
      <Stack.Screen name="Create Goal" component={CreateGoal} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
