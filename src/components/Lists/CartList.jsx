import React, { Component } from 'react';

class CartList extends Component {
    constructor(props) {
        super(props);

        this.state = { cart: [] };
    }

    // componentWillMount() {
    //     this.adsDataService.get((err, res) => {
    //         if (err) throw err;
    //         this.setState({ ads: res });
    //     });
    // }

    render() {
        return (
            <h1>This is the cart list...</h1>
        );
    }
};

export default CartList;