import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu from '../screens/Menu';

const MenuNavigator = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen name="Menu" component={Menu} />
    </MainStack.Navigator>
  );
};

export default MenuNavigator;
