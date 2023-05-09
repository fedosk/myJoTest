import React, {useEffect, useMemo, useState} from 'react';

import {useIsFocused} from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import api from '../../services/api';

export type WeekSchedule = [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
];

export interface Task {
  card_id: number;
  reviewer_id: number;
  name: string;
  reward: number;
  photo_required: boolean;
  video_required: boolean;
  schedule: WeekSchedule | null;
  period_start: string | null;
  period_stop: string | null;
  type: 'ALL' | 'TASKS' | 'CORSES';
  description: string | null;
  every_month: number[] | null;
}

export interface ApiResponse {
  result: Task[];
  success: boolean;
}

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const isFocused = useIsFocused();

  const getTasks = async () => {
    try {
      const response = await api.get<ApiResponse>('/getCards');
      setTasks(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      const interval = setInterval(() => {
        getTasks();
      }, 10000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isFocused]);

  const filteredTasks = useMemo(
    () => tasks.filter(item => item.type === 'TASKS'),
    [tasks],
  );

  return <HomeScreen tasks={filteredTasks} getTasks={getTasks} />;
};

export default Home;
