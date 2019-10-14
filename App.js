import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './component/HomeScreen';
import Play from './component/Play';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  List: {
    screen: Play,
  }
});

export default createAppContainer(AppNavigator);