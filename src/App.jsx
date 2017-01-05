import React, { Component, PropTypes } from 'react';
import {withRouter} from 'react-router';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {children} = this.props;

        return (
            <div className="app">
                {children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default withRouter(App);