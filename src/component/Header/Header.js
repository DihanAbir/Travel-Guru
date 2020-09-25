import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/review">Review</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/booked">Booked</Link></li>
                {/* <li><Link  to="/booked">Book</Link></li> */}
            </ul>
            
        </div>
    );
};

export default Header;