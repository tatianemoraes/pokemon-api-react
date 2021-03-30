import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import FeatherIcon from 'feather-icons-react';
import './style.css';
import { useHistory } from "react-router-dom";
import PokemonSearched from '../../Components/PokemonSearched';
import { getPokemonByParam } from '../../Services/api';

function Result() {

  const history = useHistory();
  const { location } = history;
  const { pokemon } = location.state || '';
  const [loading, setLoading] = useState(false);

  const [resultPokemon, setResultPokemon] = useState({})

  useEffect(() => {
    if(pokemon) {
      async function fetchData() {
       const data = await getPokemonByParam(pokemon.toLowerCase());
        if (data) {
          const { name, sprites, types } = data;
          const { front_default } = sprites;
          const params = {
            name,
            front_default,
            types
          };
          setResultPokemon(params);
          setLoading(true);
        }
      }
      fetchData();
    }
  }, [pokemon])

  return (
    <>
      <Header />
      <div className='back'>
        <button type='button' className='btn-back' onClick={() => history.push('/')}>
          <FeatherIcon icon='corner-down-left' stroke='red' />
        </button>
        {
          loading ?
            <PokemonSearched paramsResult={resultPokemon}/>
          : <h1>
              <b>Não foi buscado nenhum Pokémon</b>
            </h1>
        }
      </div>
      <Footer />
    </>
  );
}

export default Result;
