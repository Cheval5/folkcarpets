import React from 'react';
import Logo from './assets/logo/yellow-logo.png';
import './App.scss';

const App = () => {
  return (
    <div className='grid-container'>
      <div className='grid-container__head'>
        <button className='grid-container__logo'><img className='grid-container__logo-pic'src={Logo} alt="Folk Carpets Logo" />Folk</button>
        <p className='grid-container__name'>Carpets</p>
      </div>
      <div className='grid-container__main'> rug list</div>
      <div className='grid-container__foot'>All right is reserved</div>
    </div>
  );
};

export default App;