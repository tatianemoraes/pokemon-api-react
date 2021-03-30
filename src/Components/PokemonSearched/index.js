import React from 'react';
import './style.css';
import PokemonContainer from  '../Generics/PokemonContainer';

function PokemonSearched(props) {
  const titlePosition = {
    marginTop: '-130px',
    paddingLeft: '5px',
    color: 'red'
  }

  const { name, front_default, types } = props.paramsResult

  return (
    <div className='pokemon-content'>
      <PokemonContainer
      sprite={front_default}
      name={name}
      positionTitle={titlePosition}/>
      <div className='infos'>
        <ul>
        <h4>Informações:</h4>
          {
            types ? types.map((item, index) => {
              return (
                <li key={index}>{item.type.name}</li>
              )
            }) : ''
          }

        </ul>
      </div>
    </div>
  );
}

export default PokemonSearched;
