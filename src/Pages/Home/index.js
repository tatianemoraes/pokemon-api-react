import React from 'react';
import Header from '../../Components/Header';
import Main from '../../Components/Main';
import Footer from '../../Components/Footer';
import './style.css';

function Home() {
  return (
    <div className='content'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home;
