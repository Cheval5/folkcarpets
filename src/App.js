import React, { Component } from 'react';
import Logo from './assets/logo/yellow-logo.png';
import './App.scss';
import Products from './components/Products/Products';
import SortAndFilter from './components/SortAndFilter/SortAndFilter';
import Cart from './components/Cart/Cart';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  constructor(){
    super()
    this.state = {
      cartItems: [],
    }
  }

  addToCart = (product) => {
    const cartItems = Array.from(this.state.cartItems);
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item.id === product.id) {
        item.count ++;
        alreadyInCart = true;
      }
    })
    if (!alreadyInCart) {
      cartItems.push ({...product, count:1})
    }
    this.setState({cartItems})
  }

  removeFromCart = (product) => {
    const cartItems = Array.from(this.state.cartItems);
    this.setState({
      cartItems: cartItems.filter(item => item.id !== product.id)
    })
  }

  createOrder = (order) => [
    alert('Need to save order for')
  ]

  render() {
    return (
      <Provider store={store}>
        <div className='grid-container'>
          <div className='grid-container__head'>
            <button className='grid-container__logo'><img className='grid-container__logo-pic'src={Logo} alt="Folk Carpets Logo" />Folk <p className='grid-container__name'>Carpets</p></button>
            <SortAndFilter/>
          </div>
          <div className='grid-container__main'> 
            <div className='grid-container__content'>
              <div className="grid-container__products">
                <Products
                  addToCart = {this.addToCart}
                />
              </div>
              <div className="grid-container__cart">
                <Cart
                  cartItems = {this.state.cartItems}
                  removeFromCart = {this.removeFromCart}
                  createOrder = {this.createOrder}
                />
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