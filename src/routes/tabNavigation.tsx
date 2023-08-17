import React from "react";
import { TouchableOpacity, View, Text, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import Progress from "../views/progress/progress";
import HomeNavigation from "./homeNavigation";

import CreateGoal from "../views/createGoal/createGoal";
import Colors from "../constants/colors";

export type TabBarNavigation = {
  Home: undefined;
  CreateGoal: undefined;
  Progress: undefined;
};

const ScreenWidth = Dimensions.get("window").width;
const ScreenWidth15 = ScreenWidth * 0.15;

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }: any): any => (
  <TouchableOpacity
    style={{ top: -20, justifyContent: "center", alignItems: "center", width: "15%" }}
    onPress={onPress}
  >
    <View style={{ width: "100%", height: "100%", borderRadius: ScreenWidth15 / 2, backgroundColor: Colors.mainBlue }}>
      {children}
    </View>
  </TouchableOpacity>
);

const TabNavigation = () => {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarStyle: { height: "8%" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons size={20} name={focused ? "home" : "home-outline"} />
              <Text>{t("navigation:HOME")}</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CreateGoal"
        component={CreateGoal}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarIcon: () => <Ionicons color={Colors.white} size={30} name={"add"} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Progress"
        component={Progress}
        options={{
          title: t("navigation:Progress"),
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons size={20} name={focused ? "stats-chart-sharp" : "stats-chart-outline"} />
              <Text>{t("navigation:PROGRESS")}</Text>
            </View>
          ),
          headerTitleStyle: {
            fontSize: 30,
            color: "#5D4D4A",
          },
          headerStyle: {
            borderColor: Colors.gray,
            borderBottomWidth: 1,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
