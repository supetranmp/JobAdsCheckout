import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import LogoIcon, { LogoIconSizes } from '../Icons/LogoIcon';
import CartIcon from '../Icons/CartIcon';
import './Header.css';

const Header = (props) => {
    const {username, cartItemCount, onLogoutClick} = props;

    return (
        <div className="header">
            <div className="header-inner">
                <Link className="header-inner-logo" to="/">
                    <LogoIcon size={LogoIconSizes.SMALL} />
                </Link>
                {
                    (
                        username &&
                        <span className="header-inner-user">
                            <div>{`Hello, ${username}`}</div>
                            <div>
                                <Link
                                    className="header-inner-logout"
                                    to="/login"
                                    onClick={onLogoutClick}>(logout)</Link>
                            </div>
                        </span>
                    ) ||
                    <Link className="header-inner-login" to="/login">login</Link>
                }
                <Link className="header-inner-cart" to="/cart">
                    <div>
                        {
                            cartItemCount &&
                            <div className="header-inner-cart-count">
                                {
                                    cartItemCount
                                }
                            </div>
                        }
                        <CartIcon />
                    </div>
                </Link>
            </div>
        </div>
    );
}

Header.propTypes = {
    username: PropTypes.string,
    cartItemCount: PropTypes.number,
    onLogoutClick: PropTypes.func
};

export default Header;