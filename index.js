/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

 import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { createBottomTabNavigator, createTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import FeedScreen from './screens/Feed';
import DetailsScreen from './screens/Details';
import SecondScreen from './screens/Second';
import ThirdScreen from './screens/Third';

import { name as appName } from './app.json';

const HomeStack = createStackNavigator({
  Home: FeedScreen,
  Details: DetailsScreen,
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Second: SecondScreen,
  Third: ThirdScreen,
}, {
  tabBarOptions: {
    scrollEnabled: true,
    tabStyle: {
    },
    style: {
    },
  },
});

AppRegistry.registerComponent(appName, () => createAppContainer(TabNavigator));
