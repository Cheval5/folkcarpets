import React, { Component } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './Cart.scss';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: '',
            address: '',
            showCheckout: false
        }
    }

    onProceed = () => {
        this.setState({showCheckout: true})
    }

    handleNameInput = (event) => {
        this.setState({name: event.target.value})
    }

    handleEmailInput = (event) => {
        this.setState({email: event.target.value})
    }

    handleAddressInput = (event) => {
        this.setState({email: event.target.value})
    }

    createOrder = (event) => {
        event.preventDefault();
        const order = {
            email: this.state.email,
            name: this.state.name,
            address: this.state.address,
            cartItems: this.state.cartItems
        };
        this.props.createOrder(order);
    }

    render() {
        const { cartItems, removeFromCart } = this.props
        return (
            <div className="cart">
                <div className="cart__main">
                    {cartItems.length === 0 ? 
                        <div className="cart__head"></div>:
                        cartItems.length === 1 ? 
                        <div className="cart__head">You have {cartItems.length} item in the cart</div> :
                        <div className="cart__head">You have {cartItems.length} items in the cart</div>
                    }
                </div>
                <ul className="cart__items">
                    {cartItems.map(item => {
                        return (
                                <li className='cart__card' key={item.id}>
                                    <div className='cart__left'>
                                        <img className='cart__pic' src={item.image} alt={item.title} />
                                    </div>
                                    <div className='cart__right'>
                                        <p className='cart__title'>{item.title}</p>
                                        <div className='cart__bottom'>
                                            <p className='cart__price'>{item.count} x ${item.price}</p>
                                            <button className='cart__btn' onClick={()=> removeFromCart(item)}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                                )
                            })}
                </ul>
                {cartItems.length !== 0 && 
                <div className='cart__total'>
                    <p className='cart__calc'>Total: ${cartItems.reduce((a,b) => a + b.price * b.count,0)}</p>
                    <button 
                    onClick={this.onProceed}
                    className='cart__btn'>Proceed</button>
                </div>
                }
                {this.state.showCheckout &&
                    <CheckoutForm 
                    onProceed={this.state.showCheckout}
                    createOrder={this.createOrder}
                    handleNameInput={this.handleNameInput}
                    handleEmailInput={this.handleEmailInput}
                    handleAddressInput={this.handleAddressInput}
                    />
                }
            </div>
        );
    }
}

export default Cart;