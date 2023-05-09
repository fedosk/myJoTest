import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>hello :)</Text>
        <Text style={styles.text}>--></Text>
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

export default HomeScreen;
