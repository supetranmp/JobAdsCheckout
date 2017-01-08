import React, { Component, PropTypes } from 'react';
import DataService from '../../services/DataService';
import DataContextFactory from '../../services/DataContextFactory';
import './AdList.css';

class AdList extends Component {
    constructor(props) {
        super(props);

        this.adsDataService = new DataService(DataContextFactory.AdsDataContext);
        this.state = { ads: [] };
    }

    componentWillMount() {
        this.adsDataService.get((err, res) => {
            if (err) throw err;
            this.setState({ ads: res });
        });
    }

    render() {
        const {ads} = this.state;
        const {onItemAddClick} = this.props;

        return (
            <div className="ad">
                <div className="ad-list">
                    {
                        (ads && ads.length) &&
                        ads.map((a) => {
                            return (
                                <div key={a.id}>
                                    <div className="ad-item">
                                        <span className="ad-details">
                                            <h3>{a.name}</h3>
                                            <p className="word-break">{a.description}</p>
                                        </span>
                                        <span className="ad-button">
                                            <p>{`$${a.price}`}</p>
                                            <button onClick={onItemAddClick}>add to cart</button>
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
    };
}

AdList.propTypes = {
    onItemAddClick: PropTypes.func
}

AdList.contextTypes = {
    onItemAdded: PropTypes.func
};

export default AdList;