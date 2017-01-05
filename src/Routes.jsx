import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Cartpage from './pages/CartPage';
import Homepage from './pages/HomePage';
import Loginpage from './pages/LoginPage';
import App from './App';

function requireAuth(nextState, replace) {
    if (!Auth.isLoggedIn()) {
        replace({
            pathname: '/account/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

export default (
    <div>
        <Route path="/" onEnter={requireAuth} component={App}>
            <IndexRoute onEnter={requireProject} component={Home} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </Home>Page} />
            <Route path="/cart" onEnter={requireProject} component={CartPage} />
        </Route>
        <Route path="/login" component={LoginPage} />
    </div>
);