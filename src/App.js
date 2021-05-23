import React, { Component } from 'react';
import Logo from './assets/logo/yellow-logo.png';
import './App.scss';
import data from './data.json';
class App extends Component {
  constructor(){
    super()
    this.state = {
      products: data.products,
      size: '',
      sort: '',
    }
  }
  render() {
    return (
      <div className='grid-container'>
        <div className='grid-container__head'>
          <button className='grid-container__logo'><img className='grid-container__logo-pic'src={Logo} alt="Folk Carpets Logo" />Folk</button>
          <p className='grid-container__name'>Carpets</p>
        </div>
        <div className='grid-container__main'> 
          <div className='grid-container__content'>
            <div className="grid-container__products">
              Products
            </div>
            <div className="grid-container__cart">
              Cart Items
            </div>
          </div>
        </div>
        <div className='grid-container__foot'>All right is reserved</div>
      </div>
    )
  }
};

export default App;