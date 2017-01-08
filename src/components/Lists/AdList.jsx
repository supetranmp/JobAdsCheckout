import React, { Component, PropTypes } from 'react';
import Checkout from '../../lib/Checkout';
import DataService from '../../services/DataService';
import DataContextFactory from '../../services/DataContextFactory';
import Helpers from '../../lib/Helpers';
import './AdList.css';

class AdList extends Component {
    constructor(props) {
        super(props);

        this.adsDataService = new DataService(DataContextFactory.AdsDataContext);
        this.state = {
            ads: []
        };
    }

    componentWillMount() {
        this.adsDataService.get((err, res) => {
            if (err) throw err;
            this.setState({ ads: res });
        });
    }

    addToCart = (item) => {
        const {user, cart, onCartChange} = this.context;
        const checkout = new Checkout(user.pricingRules, cart);
        checkout.add(item);

        if (onCartChange) {
            onCartChange(checkout.cart);
        }
    }

    render() {
        const {ads} = this.state;

        return (
            <div className="ad">
                <div className="ad-list">
                    {
                        (
                            ads && ads.length &&
                            <div>
                                <div className="ad-list-header">
                                    <h2>Ads List</h2>
                                </div>
                                <hr />
                                {
                                    ads.map((a, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="ad-item">
                                                    <span className="ad-details-col1">
                                                        <h3>{a.name}</h3>
                                                        <p className="word-break">{a.description}</p>
                                                    </span>
                                                    <span className="ad-details-col2">
                                                        <p>{`${Helpers.toCurrency(a.price)}`}</p>
                                                        <button onClick={() => this.addToCart(a)}>add to cart</button>
                                                    </span>
                                                </div>
                                                <hr />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        ) ||
                        < div >
                            <h2>There are no ads available at the moment.</h2>
                        </div>
                    }
                </div>
            </div>
        );
    };
}

AdList.contextTypes = {
    user: PropTypes.object,
    cart: PropTypes.array,
    onCartChange: PropTypes.func
};

export default AdList;