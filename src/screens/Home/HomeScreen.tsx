import React from 'react';
import {View, StyleSheet} from 'react-native';

import {FlashList} from '@shopify/flash-list';

import {Post} from '.';
import Card from '../../components/Card';

interface HomeScreen {
  posts: Post[];
}

const HomeScreen = ({posts}: HomeScreen) => {
  const renderItem = ({item}: {item: Post}) => <Card item={item} />;

  return (
    <>
      <View style={styles.container}>
        <FlashList
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => `${item.card_id}`}
          estimatedItemSize={50}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
});

export default HomeScreen;
