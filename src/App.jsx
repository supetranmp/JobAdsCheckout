import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import Header from './components/Header/Header';
// import Checkout from './lib/Checkout';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        const loggedInUser = localStorage.user && JSON.parse(localStorage.user);
        this.state = {
            username: loggedInUser && loggedInUser.name,
        };
    }

    getChildContext() {
        return { 
            onItemAdded: this.onItemAdded
        };
    }

    onItemAdded = (item) => {
        const {state} = this;
        state.cart = state.cart.concat(item);
        this.setState(state);
    }

    onLogoutClickHandler = () => {
        const {router} = this.props;
        localStorage.removeItem('user');
        router.push('/login');
    }

    render() {
        const {username} = this.state;
        const {children} = this.props;

        return (
            <div className="app">
                <Header username={username} onLogoutClick={this.onLogoutClickHandler} />
                {children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

App.childContextTypes = {
    onItemAdded: PropTypes.func
};

export default withRouter(App);