import { RECEIVE_POKEMON } from "../actions/pokemon_actions";
import { merge } from 'lodash';

const itemsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POKEMON:
      const items = action.items;
      return merge({}, state, items);
    default:
      return state;
  }
};

export default itemsReducer;