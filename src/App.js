import React, { Component } from 'react';
import CustomersDropDownMenu from './components/DropDownMenus/CustomersDropDownMenu';
import DataService from './services/DataService';
import DataContextFactory from './services/DataContextFactory';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.customerDataService = new DataService(DataContextFactory.AdsDataContext);
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
                <CustomersDropDownMenu customers={customers}/>
            </div>
        );
    }
}

export default App;
