import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import Header from './components/Header/Header';
// import Checkout from './lib/Checkout';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        const user = localStorage.user && JSON.parse(localStorage.user);
        const cart = localStorage.cart && JSON.parse(localStorage.cart);
        this.state = {
            user: user,
            cart: cart
        };
    }

    componentWillMount() {
        console.log('Component wil mount...');
    }

    getChildContext() {
        const {user, cart} = this.state;
        return {
            user: user,
            cart: cart,
            onCartChange: this.onCartChanged
        };
    }

    onCartChanged = (cart) => {
        // Persist cart in local storage
        localStorage.cart = JSON.stringify(cart);
        this.setState({
            cart: JSON.parse(localStorage.cart)
        });
    }

    onLogoutClickHandler = () => {
        const {router} = this.props;
        localStorage.removeItem('user');
        router.push('/login');
    }

    render() {
        const {user, cart} = this.state;
        const {children} = this.props;

        return (
            <div className="app">
                <Header
                    username={user && user.name}
                    cartItemCount={cart && cart.length}
                    onLogoutClick={this.onLogoutClickHandler} />
                {children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

App.childContextTypes = {
    user: PropTypes.object,
    cart: PropTypes.array,
    onCartChange: PropTypes.func
};

export default withRouter(App);