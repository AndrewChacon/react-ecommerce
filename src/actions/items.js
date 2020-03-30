import axios from 'axios';
import {
  GET_ITEMS
  // POST_ITEM,
  // UPDATE_ITEM,
  // DELETE_ITEM,
  // ITEM_ERROR
} from './types';

export const getItems = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/get-all-items');
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    });
  } catch (error) {
    console.log('Error Getting Items');
  }
};
