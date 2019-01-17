import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <Link to={`/pokemon/${pokemon.id}`}>
        <li className="unimon">
          {pokemon.name}
          <img src={pokemon.image_url} className="pokeimg" />
        </li>
      </Link> 
    )
  }
}

export default PokemonIndexItem;