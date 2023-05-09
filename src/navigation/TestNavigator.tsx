import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Test from '../screens/Test';

const TestNavigator = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator initialRouteName="Test">
      <MainStack.Screen name="Test" component={Test} />
    </MainStack.Navigator>
  );
};

export default TestNavigator;
