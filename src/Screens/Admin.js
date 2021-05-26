import React, { Component } from 'react';
import Logo from '../assets/logo/new-logo.png';
import { Link } from 'react-router-dom';
import Orders from '../components/Order/Orders';

class Admin extends Component {
    render() {
        return (
            <div>
                <div className='grid-container__head'>
                    <Link to="/" className='grid-container__logo'><img className='grid-container__logo-pic' src={Logo} alt="Folk Carpets Logo" /></Link>
                </div>
                <p>Order</p>
                <Orders/>
            </div>
        );
    }
}

export default Admin;