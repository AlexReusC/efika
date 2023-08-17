import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";

import Home from "../views/home/home";
import Settings from "../views/settings/settings";
import colors from "../constants/colors";

export type StackHomeNavigation = {
  ActiveGoals: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator();

const HomeNavigation = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator initialRouteName="ActiveGoals">
      <Stack.Screen name="ActiveGoals" options={{ headerShown: false }} component={Home} />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: t("navigation:Settings"),
          headerTitleStyle: {
            fontSize: 30,
            color: "#5D4D4A",
          },
          headerStyle: {
            borderColor: colors.gray,
            borderBottomWidth: 1,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
