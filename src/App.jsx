import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import Header from './components/Header/Header';
// import Checkout from './libs/Checkout';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: localStorage.customer
        };
    }

    // getChildContext() {
    //     return { form: this };
    // }

    onItemAdded = (item) => {
        const {state} = this;
        state.cart = state.cart.concat(item);
        this.setState(state);
    }

    onLogoutClickHandler = () => {
        const {router} = this.props;
        localStorage.removeItem('customer');
        router.push('/login');
    }

    render() {
        const {user} = this.state;
        const {children} = this.props;

        return (
            <div className="app">
                <Header user={user} onLogoutClick={this.onLogoutClickHandler} />
                {children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

// App.childContextTypes = {
//     checkout: PropTypes.object.isRequired
// };

export default withRouter(App);