import React from 'react';
import {StyleSheet, View} from 'react-native';

import MainNavigator from './navigation/MainNavigator';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
