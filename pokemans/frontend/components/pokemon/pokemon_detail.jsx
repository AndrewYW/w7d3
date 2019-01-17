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
    const item_ids = pokemon.item_ids || [];
    //key into the items since they probably already exist
    //since render happens AFTER a state change 
    //amazing. 
    const items = item_ids.map( 
      (id) => {
      const item = this.props.items[id];
      return <li className="oneItem" key={item.id}>{item.name} <img src={item.image_url}/></li>
      });
    return (
      <div className="poketail">
      <section className="detailImgName">
        <p>{pokemon.name}</p>
        <img src={pokemon.image_url} className="detailimg" />
      </section>
      <section className="detailDetails">
        <p>Type: {pokemon.poke_type}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <ul className="itemsList">
          {items}
        </ul>
      </section>
      </div >
    )
  }
}

export default PokemonDetail;