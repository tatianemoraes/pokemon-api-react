import React from 'react';
import './style.css';

function PokemonContainer(props) {
  return (
    <>
      <img className='pokemon-photo' src={props.sprite} alt=""/>
      <b className='title-cel' style={props.positionTitle}>{props.name}</b>
    </>
  );
}

export default PokemonContainer;
