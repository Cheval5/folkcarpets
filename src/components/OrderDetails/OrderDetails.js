import React from 'react';
import './OrderDetails.scss';

const OrderDetails = ({ order, closeWindow }) => {
    return (
        <div className="order">
            <div className="order__shadow">
                <div className="order__window">
                    <button className="order__btn" onClick={closeWindow}>x</button>
                    <div className="order__details">
                    <p className="order__item-tag">Thank you for shopping with us!</p>
                        <p className="order__message">Your order has been placed</p>
                        <p className="order__item-tag">Order # {order.id}</p>
                        <ul className="order__list">
                            <li className="order__item">
                                <p className="order__item-tag">Name: </p>
                                <p className="order__item-value">{order.name}</p>
                            </li>
                            <li className="order__item">
                                <p className="order__item-tag">Email: </p>
                                <p className="order__item-value">{order.email}</p>
                            </li>
                            <li className="order__item">
                                <p className="order__item-tag">Address: </p>
                                <p className="order__item-value">{order.address}</p>
                            </li>
                            <li className="order__item">
                                <p className="order__item-tag">Total: </p>
                                <p className="order__item-value">${order.total}</p>
                            </li>
                            <li className="order__item">
                                <p className="order__item-tag">Cart Items: </p>
                                <p className="order__item-value">{order.cartItems.map(item => {
                                    return(
                                        <div>
                                            {item.count} * {item.title}
                                        </div>
                                    )
                                })}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;