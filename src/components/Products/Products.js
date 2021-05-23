import React, { Component } from 'react';
import './Products.scss'

class products extends Component {
    render() {
        const { products, addToCart } = this.props
        return (
            <div className='products'>
                <h2 className='products__heading'>Rugs</h2>
                <ul className='products__name'>
                    {products.map(product => {
                        return (
                            <li className='products__card' key={product._id}>
                                <div className='products__card-container'>
                                    <div className="products__card-link">
                                        <img className="products__pic"src={product.image} alt={product.title} />
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
            </div>
        );
    }
}

export default products;