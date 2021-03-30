import React from 'react';
import './style.css';
import Logo from '../../Assets/logo-pokemon.png';

function Header() {
  return (
    <div className='header'>
      <img className='img-logo' src={Logo} alt=""/>
    </div>
  )
}

export default Header;
