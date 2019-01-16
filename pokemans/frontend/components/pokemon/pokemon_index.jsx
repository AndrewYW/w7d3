import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
   this.props.requestAllPokemon();
  }

  render() {
    const { pokemon, requestAllPokemon } = this.props;
    const pokemons = pokemon.map( poke => (
      <li key={poke.id} className="unimon">
        {poke.name} <img src={poke.image_url} className="pokeimg"/>
      </li>
    ));

    return (
      <>
        <ul className="pokelist">{pokemons}</ul>
      </>
    )
  }
}

export default PokemonIndex;