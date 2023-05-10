import React from 'react';
import {View, StyleSheet} from 'react-native';

import {FlashList} from '@shopify/flash-list';

import {Task} from '.';
import Card from '../../components/Card';

interface HomeScreen {
  tasks: Task[];
  getTasks: () => void;
}

const TestScreen = ({tasks, getTasks}: HomeScreen) => {
  const renderItem = ({item}: {item: Task}) => <Card item={item} />;

  return (
    <View style={styles.container}>
      <FlashList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={({card_id}) => `${card_id}`}
        estimatedItemSize={50}
        onRefresh={getTasks}
        refreshing={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2fb',
  },
});

export default TestScreen;
