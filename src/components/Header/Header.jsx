import React from 'react';
import { Link } from 'react-router';
import SmallLogo from '../../images/logo-sm.jpg';
import Cart from '../../images/cart.png';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <div className="header-inner">
                <Link className="header-inner-logo" to="/">
                    <img src={SmallLogo} alt="logo" />
                </Link>
                <Link className="header-inner-cart" to="/cart">
                    <img src={Cart} alt="cart"/>
                </Link>
            </div>
        </div>
    );
}

export default Header;