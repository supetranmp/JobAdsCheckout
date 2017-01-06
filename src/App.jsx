import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: localStorage.customer
        };
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

App.childContextTypes = {
    router: PropTypes.object.isRequired
};

export default withRouter(App);