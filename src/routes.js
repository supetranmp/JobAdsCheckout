import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import App from './App';

export default (
    <div>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={CheckoutPage} />
        </Route>
        <Route path="/login" component={LoginPage} />
    </div>
);