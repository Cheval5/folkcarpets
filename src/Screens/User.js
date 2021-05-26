import React, { Component } from 'react';
import SortAndFilter from "../components/SortAndFilter/SortAndFilter";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import Logo from '../assets/logo/new-logo.png';
import { Link } from 'react-router-dom';

class User extends Component {
    render() {
        return (
            <>
                <div className='grid-container__head'>
                    <Link to="/" className='grid-container__logo'><img className='grid-container__logo-pic' src={Logo} alt="Folk Carpets Logo" /></Link>
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
            </>
        );
    }
}

export default User;