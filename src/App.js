import React, { Component } from 'react';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';
import DataService from './services/DataService';
import DataContextFactory from './services/DataContextFactory';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.customerDataService = new DataService(DataContextFactory.CustomersDataContext);
        this.state = {
            customers: []
        };
    }

    componentWillMount() {
        const {state} = this;
        this.customerDataService.get((err, res) => {
            if (err) throw err;
            state.customers = res;
        });
        this.setState(state);
    }

    render() {
        const {customers} = this.state;

        return (
            <div className="app">
                <DropDownMenu options={customers} />
            </div>
        );
    }
}

export default App;