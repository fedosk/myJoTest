import React from 'react';
import {Easing, Image, StyleSheet} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import TestNavigator from './TestNavigator';
import HomeNavigator from './HomeNavigator';
import Icons from '../assets/index';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      shifting={true}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({current, layouts}) => {
          return {
            cardStyle: {
              transform: [
                {
                  rotateY: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          };
        },
      }}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
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
