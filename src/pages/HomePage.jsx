import React, { Component } from 'react';
import DataService from '../services/DataService';
import DataContextFactory from '../services/DataContextFactory';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
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

        return (
            <div className="home-page">
                {
                    (ads && ads.length) &&
                    ads.map((a) => {
                        return (
                            <div className="home-page-ad">
                                <h3>{a.name}</h3>
                                <p>{a.description}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    };
}

export default HomePage;