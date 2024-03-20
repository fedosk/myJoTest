import React, {useCallback} from 'react';
import { Dimensions, StyleSheet, Easing } from 'react-native';
import Button from '../../components/Button';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const TestScreen = () => {
  const navigator = useNavigation();

  const windowWidth = Dimensions.get('window').width;

  const translationX = useSharedValue(windowWidth);

  const startAnimation = useCallback(() => {
    translationX.value = withTiming(0, {duration: 300, easing: Easing.linear});
  }, [translationX]);

  const endAnimation = useCallback(() => {
    translationX.value = windowWidth;
  }, [translationX, windowWidth]);

  const styleX = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translationX.value}],
    };
  });

  useFocusEffect(
    useCallback(() => {
      startAnimation();

      return () => endAnimation();
    }, [endAnimation, startAnimation]),
  );

  return (
    <Animated.View style={[styles.container, styleX]}>
      <Button
        title={'Settings'}
        onPress={() => {
          navigator.navigate('Settings');
          translationX.value = 0;
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2fb',
    padding: 10,
    borderColor: 'red',
    borderWidth: 5,
  },
});

export default TestScreen;
