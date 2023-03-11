import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../views/home/home';
import Progress from '../views/progress/progress';
import Settings from '../views/settings/settings';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarActiveTintColor: 'black' }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} />,
        }}
      />
      <Tab.Screen
        name="Progress"
        component={Progress}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'stats-chart-sharp' : 'stats-chart-outline'} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'settings' : 'settings-outline'} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
