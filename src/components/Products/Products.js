import React, { Component } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Products.scss'

class products extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: null
        }
    }

    openWindow = (product) => {
        this.setState({product})
    }

    closeWindow = () => {
        this.setState({product: null})
    }

    render() {
        const { products, addToCart } = this.props
        return (
            <div className='products'>
                <ul className='products__name'>
                    {products.map(product => {
                        return (
                            <li className='products__card' key={product._id}>
                                <div className='products__card-container'>
                                    <div onClick={()=>this.openWindow(product)} className="products__card-link">
                                        <div className="products__pic-container">
                                            <img className="products__pic"src={product.image} alt={product.title} />
                                        </div>
                                        <p className="products__title">{product.title}</p>
                                    </div>
                                    <div className="products__card-detail">
                                        <p className="products__price">${product.price}</p>
                                        <button 
                                        onClick = {() => addToCart(product)}
                                        className="products__cart-add">Add to cart</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                {this.state.product && 
                    <ProductDetails
                        product={this.state.product}
                        addToCart={addToCart}
                        closeWindow={this.closeWindow}
                    />
                }
            </div>
        );
    }
}

export default products;