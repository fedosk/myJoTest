import React from 'react';
import Test from '../screens/Test';
import Settings from '../screens/Settings';
import Menu from '../screens/Menu';
import {createStackNavigator} from '@react-navigation/stack';

const TestNavigator = () => {
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator initialRouteName="Test">
      <MainStack.Screen name="Test" component={Test} />
      <MainStack.Screen name="Settings" component={Settings} />
      <MainStack.Screen name="Menu" component={Menu} />
    </MainStack.Navigator>
  );
};

export default TestNavigator;
