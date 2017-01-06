import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import DropDownMenu from '../components/DropDownMenus/DropDownMenu';
import DataService from '../services/DataService';
import DataContextFactory from '../services/DataContextFactory';
import BigLogo from '../images/logo-bg.jpg';
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
        const {router} = this.props;
        localStorage.customer = customer;
        router.push('/');
    }

    onAnonymousLinkClicked = () => {
        localStorage.removeItem('customer');
    }

    render() {
        const {customers} = this.state;
        return (
            <div className="login-page">
                <div className="login-page-logo">
                    <img src={BigLogo} alt="logo" />
                </div>
                <div className="login-page-form">
                    <h2>Login</h2>
                    <div className="login-page-menu">
                        <span>As customer: {'\u00a0'}</span>
                        <DropDownMenu options={customers} onChange={this.onCustomerChanged} />
                    </div>
                    <p>
                        <Link to="/" onClick={this.onAnonymousLinkClicked}>or continue without logging in...</Link>
                    </p>
                </div>
            </div>
        );
    }
};

export default withRouter(LoginPage);