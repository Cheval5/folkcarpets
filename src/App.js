import React, { Component } from 'react';
import Logo from './assets/logo/yellow-logo.png';
import './App.scss';
import data from './data.json';
import Products from './components/Products/Products';
import SortAndFilter from './components/SortAndFilter/SortAndFilter';
import Cart from './components/Cart/Cart';
class App extends Component {
  constructor(){
    super()
    this.state = {
      products: data.products,
      cartItems: [],
      category: '',
      sort: '',
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

  filterProducts = (event) => {
    const category = event.target.value;
    this.setState(
      category.length > 0 ?
      {
        category: category,
        products: data.products.filter(filteredProducts => filteredProducts.category === category)
      }
      :
      {
        category: category,
        products: data.products
      }
    )
  }


  sortProducts = (event) => {
    const sort = event.target.value
    this.setState({
      sort: sort,
      products: Array.from(this.state.products).sort((a,b) => {
      if(sort === 'lowest') {
        return a.price - b.price 
      } else if(sort === 'highest'){
        return b.price - a.price 
      } else {
        return a.id - b.id
      }
    })})
  }

  render() {
    return (
      <div className='grid-container'>
        <div className='grid-container__head'>
          <button className='grid-container__logo'><img className='grid-container__logo-pic'src={Logo} alt="Folk Carpets Logo" />Folk <p className='grid-container__name'>Carpets</p></button>
          <SortAndFilter 
            count = {this.state.products.length}
            sort = {this.state.sort}
            category = {this.state.category}
            sortProducts = {this.sortProducts}
            filterProducts = {this.filterProducts}
          />
        </div>
        <div className='grid-container__main'> 
          <div className='grid-container__content'>
            <div className="grid-container__products">
              <Products 
                products = {this.state.products}
                addToCart = {this.addToCart}
              />
            </div>
            <div className="grid-container__cart">
              <Cart
                cartItems = {this.state.cartItems}
                removeFromCart = {this.removeFromCart}
              />
            </div>
          </div>
        </div>
        <div className='grid-container__foot'>All right is reserved</div>
      </div>
    )
  }
};

export default App;