import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/review">Review</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/booked">Booked</a></li>
                {/* <li><Link  to="/booked">Book</Link></li> */}
            </ul>
            
        </div>
    );
};

export default Header;