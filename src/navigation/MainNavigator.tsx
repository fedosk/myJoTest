import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

const MainNavigator = () => {
  const MainStack = createNativeStackNavigator();

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
