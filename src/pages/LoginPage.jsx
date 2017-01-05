import React, { Component } from 'react';
import { Link } from 'react-router';
import DropDownMenu from '../components/DropDownMenus/DropDownMenu';
import DataService from '../services/DataService';
import DataContextFactory from '../services/DataContextFactory';
import './LoginPage.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.customerDataService = new DataService(DataContextFactory.CustomersDataContext);
        this.state = { customers: [] };
    }

    componentWillMount() {
        this.customerDataService.get((err, res) => {
            if (err) throw err;
            this.setState({ customers: res });
        });
    }

    onCustomerChanged = (customer) => {
        console.log(customer);
    }

    onAnonymousLinkClicked = () => {
        console.log('Anonymous');
    };

    render() {
        const {customers} = this.state;
        return (
            <div className="login-page">
                <div className="login-page-form">
                    <h2>Login</h2>
                    <span>Select a customer: </span>
                    <DropDownMenu options={customers} onChange={this.onCustomerChanged} />
                    <br />
                    <br />
                    <div>
                        <Link to="" onClick={this.onAnonymousLinkClicked}>or continue without logging in...</Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default LoginPage;