import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';

const MainNavigator = () => {
  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Tab"
        screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Tab" component={TabNavigator} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
