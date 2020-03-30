import {
  GET_ITEMS
  // POST_ITEM,
  // UPDATE_ITEM,
  // DELETE_ITEM,
  // ITEM_ERROR
} from '../actions/types';

const initalState = {
  items: [],
  item: null
};

export default function(state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: payload
      };
    default:
      return state;
  }
}
