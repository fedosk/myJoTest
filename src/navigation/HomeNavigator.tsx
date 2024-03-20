import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

const HomeNavigator = () => {
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};

export default HomeNavigator;
