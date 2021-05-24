import React from 'react';
import Slider from './Slider';
import './ProductDetails.scss'

const ProductDetails = ({ product, addToCart, closeWindow }) => {
    return (
        <div className="details">
            <div className="details__shadow" onClick={()=>closeWindow()}></div>
            <div className="details__window">
                <button className="details__btn" onClick={()=>closeWindow()}>x</button>
                <Slider
                    imageMain = {product.image}
                    imageOne = {product.imageOne}
                    imageTwo = {product.imageTwo}
                    imageThree = {product.imageThree}
                />
                <div className="details__contents">
                    <p className= "details__text details__text--title">{product.title}</p>
                    <p className= "details__text">{product.category}</p>
                    <p className= "details__text">{product.description}</p>
                    <p className= "details__text details__text--price">${product.price}</p>
                    <button
                        className="details__btn details__btn--add"
                        onClick={()=>{
                        addToCart(product)
                        closeWindow()
                        }}
                    >Add To Cart</button>
                </div>
            </div>
        </div>
    );
};
export default ProductDetails;