import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Task} from '../screens/Test';
import {addCard} from '../utils/addCard';

export interface AddCardItem
  extends Omit<Task, 'card_id' | 'photo_required' | 'schedule'> {}

const Card = ({item}: {item: Task}) => {
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
    <TouchableOpacity onPress={onCardPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.name}</Text>
        {item?.period_start && <Text>Начать в: {item.period_start}</Text>}
        {item?.period_stop && <Text>Закончить до: {item.period_stop}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 84,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#d7e3fc',
    borderRadius: 10,
    borderColor: '#abc4ff',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;
