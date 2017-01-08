import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import RemoveIcon from '../../components/Icons/RemoveIcon';
import Checkout from '../../lib/Checkout';
import Helpers from '../../lib/Helpers';
import './CartList.css';

class CartList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount() {
        const {user, cart} = this.context;
        const checkout = new Checkout(user && user.pricingRules, cart);

        this.setState({
            cart: checkout.cart,
            total: checkout.total()
        });
    }

    compom

    onQuantityChange = (cartItem, event) => {
        const {value} = event.target;
        const {user, cart, onCartChange} = this.context;
        const checkout = new Checkout(user && user.pricingRules, cart);

        if (cartItem.quantity < value) {
            checkout.add(cartItem.item);
        }
        else if (value > 0) {
            checkout.subtract(cartItem.item);
        }

        if (onCartChange) {
            onCartChange(checkout.cart, () => {
                this.setState({
                    cart: checkout.cart,
                    total: checkout.total()
                });
            });
        }
    }

    onRemoveItem = (cartItem, event) => {
        const {user, cart, onCartChange} = this.context;
        const checkout = new Checkout(user.pricingRules, cart);
        checkout.remove(cartItem.item);

        if (onCartChange) {
            onCartChange(checkout.cart, () => {
                this.setState({
                    cart: checkout.cart,
                    total: checkout.total()
                });
            });
        }
    }

    render() {
        const {cart, total} = this.state;

        return (
            <div className="cart">
                <div className="cart-list">
                    {
                        (
                            cart && cart.length &&
                            <div>
                                <span className="cart-list-header">
                                    <Link to="/">{`< Back to Ads`}</Link>
                                    <h2>My shopping cart</h2>
                                </span>
                                <div>
                                    <div className="cart-item list-header">
                                        <span className="cart-details-col1">{`${
                                            cart.reduce((a, b) => {
                                                return { quantity: a.quantity + b.quantity }
                                            }).quantity
                                            } Items`}</span>
                                        <span className="cart-details-col2">Quantity</span>
                                        <span className="cart-details-col3 list-header">Item Price</span>
                                        <div className="filler" />
                                    </div>
                                </div>
                                <hr />
                                {
                                    cart.map((cartItem, index) => {
                                        const {item} = cartItem;
                                        return (
                                            <div key={index}>
                                                <div className="cart-item">
                                                    <span className="cart-details-col1">
                                                        <h3>{item.name}</h3>
                                                    </span>
                                                    <span className="cart-details-col2">
                                                        <input
                                                            type="number"
                                                            onChange={this.onQuantityChange.bind(this, cartItem)}
                                                            value={cartItem.quantity} />
                                                    </span>
                                                    <span className="cart-details-col3">
                                                        <div className="cart-price">
                                                            {
                                                                `${Helpers.toCurrency(cartItem.price)}`
                                                            }
                                                        </div>
                                                    </span>
                                                    <button
                                                        className="cart-button-remove-item"
                                                        onClick={this.onRemoveItem.bind(this, cartItem)}>
                                                        <RemoveIcon />
                                                    </button>
                                                </div>
                                                <hr />
                                            </div>
                                        );
                                    })
                                }
                                <span className="cart-list-total">
                                    <h2>Total:</h2>
                                    <p>{`${Helpers.toCurrency(total)}`}</p>
                                </span>
                            </div>
                        ) ||
                        <div>
                            <span className="cart-list-header">
                                <Link to="/">{`< Back to Ads`}</Link>
                                <h2>There are no items in this cart.</h2>
                            </span>
                            <hr />
                        </div>
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