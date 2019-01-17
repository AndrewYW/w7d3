import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';
class PokemonIndex extends React.Component {

  componentDidMount() {
   this.props.requestAllPokemon();
  }

  render() {
    const pokemons = this.props.pokemon.map((poke, idx) => <PokemonIndexItem key={idx} pokemon={poke} />);
    return (  
      <>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <ul className="pokelist">{pokemons}</ul>
      </>
    )
  }
}

export default PokemonIndex;