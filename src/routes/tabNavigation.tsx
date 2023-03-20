import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import Home from "../views/home/home";
import Progress from "../views/progress/progress";
import Settings from "../views/settings/settings";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const { t } = useTranslation();
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarActiveTintColor: "black" }}>
      <Tab.Screen
        name={t("navigation:Home")}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? "home" : "home-outline"} />,
        }}
      />
      <Tab.Screen
        name={t("navigation:Progress")}
        component={Progress}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? "stats-chart-sharp" : "stats-chart-outline"} />,
        }}
      />
      <Tab.Screen
        name={t("navigation:Settings")}
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? "settings" : "settings-outline"} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
