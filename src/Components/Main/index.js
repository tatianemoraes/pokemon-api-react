import React, { useState } from 'react';
import './style.css';
import FeatherIcon from 'feather-icons-react';
import PokemonContainer from '../Generics/PokemonContainer';
import { getPokemonByParam } from '../../Services/api';
import { useHistory } from "react-router-dom";

function Main() {

  const [pokemon, setPokemon] = useState('');
  const [dataPokemon, setDataPokemon] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function getPokemon() {
    const data = await getPokemonByParam(pokemon.toLowerCase());
    if(data) {
      const { name, sprites } = data;
      const { front_default } = sprites;
      const param = { name, front_default };
      setLoading(true);
      setDataPokemon(param);
    }
  }

  const handleKeyPress = async (event) => {
    if(event.key === 'Enter'){
      await getPokemon()
    }
  }

  return (
    <div className='main'>
      <label htmlFor="">Busque seu Pokémon</label>
      <div className='search'>
        <input
          type="text"
          value={pokemon}
          onChange={(event) => setPokemon(event.target.value)}
          onKeyPress={(event) => handleKeyPress(event)}
        />
        <button type='button' onClick={() => getPokemon()}>
          <FeatherIcon icon="search" stroke="red" />
        </button>
      </div>
      {
        loading
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        ? <a onClick={() => history.push('/result', {pokemon})}>
            <PokemonContainer
              sprite={dataPokemon.front_default}
              name={dataPokemon.name}
            />
          </a>
        : ''
      }
    </div>
  )
}

export default Main;
