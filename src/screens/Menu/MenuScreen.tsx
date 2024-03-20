import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MenuScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>MenuScreen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

export default MenuScreen;
