import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";
import { merge } from 'lodash';
const pokemonReducer = (state = {}, action) => {
  const newState = merge({}, state);
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return merge(newState, action.pokemon);
      
    default:
      return state;
  }
};

export default pokemonReducer;