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

export interface Post {
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
  result: Post[];
  success: boolean;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const isFocused = useIsFocused();

  const getPost = async () => {
    try {
      const response = await api.get<ApiResponse>('/getPosts');
      setPosts(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      const interval = setInterval(() => {
        getPost();
      }, 10000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isFocused]);

  const filteredTasks = useMemo(
    () => posts.filter(p => p.type === 'TASKS'),
    [posts],
  );

  return <HomeScreen posts={filteredTasks} />;
};

export default Home;
