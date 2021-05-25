import React, { Component } from 'react';
import Logo from './assets/logo/yellow-logo.png';
import './App.scss';
import Products from './components/Products/Products';
import SortAndFilter from './components/SortAndFilter/SortAndFilter';
import Cart from './components/Cart/Cart';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='grid-container'>
          <div className='grid-container__head'>
            <button className='grid-container__logo'><img className='grid-container__logo-pic' src={Logo} alt="Folk Carpets Logo" />Folk <p className='grid-container__name'>Carpets</p></button>
            <SortAndFilter/>
          </div>
          <div className='grid-container__main'> 
            <div className='grid-container__content'>
              <div className="grid-container__products">
                <Products/>
              </div>
              <div className="grid-container__cart">
                <Cart/>
              </div>
            </div>
          </div>
          <div className='grid-container__foot'>All right is reserved</div>
        </div>
      </Provider>
    )
  }
};

export default App;