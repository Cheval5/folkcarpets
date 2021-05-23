import React, { Component } from 'react';
import Logo from './assets/logo/yellow-logo.png';
import './App.scss';
import data from './data.json';
import Products from './components/Products/Products';
import SortAndFilter from './components/SortAndFilter/SortAndFilter';
class App extends Component {
  constructor(){
    super()
    this.state = {
      products: data.products,
      category: '',
      sort: '',
    }
  }

  filterProducts = (event) => {
    this.setState({
      category: event.target.value,
    })
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
              />
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