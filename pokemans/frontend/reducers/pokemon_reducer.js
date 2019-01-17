import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from "../actions/pokemon_actions";
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  // debugger
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case RECEIVE_POKEMON:
      const newPoke = { [action.pokemon.id]: action.pokemon, };
      return merge({}, state, newPoke);
    default:
      return state;
  }
};

export default pokemonReducer;