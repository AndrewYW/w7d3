import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from "../actions/pokemon_actions";
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
    case RECEIVE_POKEMON:
      const newPoke = { [action.pokemon.id]: action.pokemon };
      return merge(newState, newPoke);
    default:
      return state;
  }
};

export default pokemonReducer;