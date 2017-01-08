import React, { Component, PropTypes } from 'react';
import Checkout from '../../lib/Checkout';
import './CartList.css';

class CartList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount() {
        const {user, cart} = this.context;
        this.checkout = new Checkout(user.pricingRules, cart);

        this.setState({
            cart: this.checkout.cart
        });
    }

    render() {
        const {cart} = this.state;

        return (
            <div className="cart`">
                <div className="cart-list">
                    {
                        (cart && cart.length) &&
                        cart.map((cartItem, index) => {
                            const {item} = cartItem;
                            return (
                                <div key={index}>
                                    <div className="cart-item">
                                        <span className="cart-details">
                                            <h3>{item.name}</h3>
                                            <p className="word-break">{item.description}</p>
                                        </span>
                                        <span className="cart-button">
                                            <p>Test</p>
                                            <button>add to cart</button>
                                        </span>
                                    </div>
                                    <hr />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
};

CartList.contextTypes = {
    user: PropTypes.object,
    cart: PropTypes.array,
    onCartChange: PropTypes.func
};

export default CartList;