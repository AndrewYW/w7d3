import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  render() {
    const { pokemon, requestAllPokemon } = this.props;
    return (
      <li className="unimon" key={ pokemon.id }>
        {pokemon.name} <img src={pokemon.image_url} className="pokeimg"/>
      </li>
    )
  }
}

export default PokemonIndexItem;