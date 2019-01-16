import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon } from './actions/pokemon_actions';
import * as APIUtil from './util/api_util';
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  
  const rootEl = document.getElementById('root');

  window.store = configureStore();

  window.getState = window.store.getState;
  window.dispatch = window.store.dispatch;

  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
