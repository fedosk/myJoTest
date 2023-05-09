import {Post} from '../screens/Home';

export interface AddCardItem
  extends Omit<Post, 'card_id' | 'photo_required' | 'schedule'> {}

export const addCard = ({newItem}: {newItem: AddCardItem}) => {
  console.log(newItem);
};
