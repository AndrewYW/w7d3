import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
class PokemonIndex extends React.Component {

  componentDidMount() {
   this.props.requestAllPokemon();
  }

  render() {
    // const { pokemon, requestAllPokemon } = this.props;
    // const pokemons = pokemon.map( poke => (
    //   <li key={poke.id} className="unimon">
    //     {poke.name} <img src={poke.image_url} className="pokeimg"/>
    //   </li>
    // ));
    //add a comment or something - Adam
    const pokemons = this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return (  
      <>
        <ul className="pokelist">{pokemons}</ul>
      </>
    )
  }
}

export default PokemonIndex;