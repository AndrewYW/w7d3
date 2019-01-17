import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestPokemon(this.props.match.params.pokemonId);
    }
  }

  render() {
    const pokemon = this.props.pokemon; 
    return (
      <section>
        <p>{pokemon.name}</p>
        <img src={pokemon.image_url} className="pokeimg" />
      </section>
    )
  }
}

export default PokemonDetail;