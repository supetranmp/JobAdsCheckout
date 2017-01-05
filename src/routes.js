import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import App from './App';

function requireAuth(nextState, replace) {
    // if (!Auth.isLoggedIn()) {
    //     replace({
    //         pathname: '/account/login',
    //         state: { nextPathname: nextState.location.pathname }
    //     })
    // }
}

export default (
    <div>
        <Route path="/" onEnter={requireAuth} component={App}>
            <IndexRoute component={HomePage} />
            <Route path="/cart" component={CartPage} />
        </Route>
        <Route path="/login" component={LoginPage} />
    </div>
);