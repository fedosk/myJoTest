import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TestNavigator from './TestNavigator';
import HomeNavigator from './HomeNavigator';
import Icons from '../assets/index';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.logo}
              source={focused ? Icons.homeActive : Icons.home}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TestNavigator"
        component={TestNavigator}
        options={{
          tabBarLabel: 'Test',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.logo}
              source={focused ? Icons.menuActive : Icons.menu}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 4,
    width: 24,
    height: 24,
  },
});

export default TabNavigator;
