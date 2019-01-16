import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      
      Object.values(action.pokemon).forEach( (poke) => {
        // debugger
        newState[poke.id] = poke;
      });
    return newState;
    default:
      return state;
  }
};

export default pokemonReducer;