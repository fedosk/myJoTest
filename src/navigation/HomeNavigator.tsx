import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

const HomeNavigator = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};

export default HomeNavigator;
