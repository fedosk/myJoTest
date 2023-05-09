import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Post} from '../screens/Home';
import {addCard, AddCardItem} from '../utils/addCard';

const Card = ({item}: {item: Post}) => {
  const onCardPress = () => {
    Alert.alert(`${item.name}`, `${item.description ?? ''}`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);

    const newItem: AddCardItem = {
      reviewer_id: item.reviewer_id,
      name: item.name,
      reward: item.reward,
      video_required: item.video_required,
      period_start: item?.period_start,
      period_stop: item?.period_stop,
      type: item.type,
      description: item?.description,
      every_month: item?.every_month,
    };

    addCard({newItem});
  };

  return (
    <>
      <TouchableOpacity onPress={onCardPress}>
        <View style={styles.container}>
          <Text>{item.name}</Text>
          <Text>Начать в: {item.period_start}</Text>
          <Text>Закончить до: {item.period_stop}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    marginBottom: 8,
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#aaaaaa',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
