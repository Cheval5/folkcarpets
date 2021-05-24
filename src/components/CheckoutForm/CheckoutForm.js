import React from 'react';
import './CheckoutForm.scss';

const CheckoutForm = ({ createOrder, handleNameInput, handleEmailInput, handleAddressInput  }) => {
    return (
        <div className="checkout">
            <form  className="checkout__form" onSubmit={createOrder}>
                <ul className="checkout__list">
                    <li className="checkout__items">
                        <label 
                        className="checkout__tag"
                        htmlFor="">Email</label>
                        <input 
                            className="checkout__insert"
                            name="email"
                            type="text" 
                            required
                            onChange={handleEmailInput}
                            />
                    </li>
                    <li className="checkout__items">
                        <label 
                        className="checkout__tag"
                        htmlFor="">Name</label>
                        <input 
                            className="checkout__insert"
                            name="name"
                            type="text" 
                            required
                            onChange={handleNameInput}
                            />
                    </li>
                    <li className="checkout__items">
                        <label 
                        className="checkout__tag"
                        htmlFor="">Address</label>
                        <input 
                            className="checkout__insert"
                            name="address"
                            type="text" 
                            required
                            onChange={handleAddressInput}
                            />
                    </li>
                </ul>
                <button className='checkout__btn' type="submit">Checkout</button>
            </form>
            
        </div>
    );
};

export default CheckoutForm;