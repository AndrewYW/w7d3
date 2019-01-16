import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import * as APIUtil from './util/api_util';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  
  const rootEl = document.getElementById('root');

  window.store = configureStore();

  window.getState = window.store.getState;
  window.dispatch = window.store.dispatch;
  window.selectAllPokemon = selectAllPokemon;

  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
// const initialState = getState();
// selectAllPokemon(initialState); //=> []

// dispatch(requestAllPokemon());

// const populatedState = getState();
// selectAllPokemon(populatedState); //