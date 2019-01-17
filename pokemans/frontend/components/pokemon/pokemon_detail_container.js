import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { selectAllPokemon, selectPokeItems } from '../../reducers/selectors';
import { requestPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, props) => {
  const pokemonId = props.match.params.pokemonId;
  const poke = state.entities.pokemon[pokemonId] || {};
  return { 
    pokemon: poke, 
    items: state.entities.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPokemon: (id) => dispatch(requestPokemon(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
