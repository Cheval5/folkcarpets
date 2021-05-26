import React, { Component } from 'react';
import Logo from '../assets/logo/new-logo.png';
import { Link } from 'react-router-dom';
import Orders from '../components/Order/Orders';
import './Admin.scss';

class Admin extends Component {
    render() {
        return (
            <div className='Admin'>
                <div className='Admin__head'>
                    <Link to="/" className='Admin__logo'><img className='Admin__logo-pic' src={Logo} alt="Folk Carpets Logo" /></Link>
                    <Link to="/admin" className='Admin__title'>Admin</Link>
                </div>
                <Orders/>
            </div>
        );
    }
}

export default Admin;