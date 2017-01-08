import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import LogoIcon from '../Icons/LogoIcon';
import DropDownMenu from '../DropDownMenus/DropDownMenu';
import DataService from '../../services/DataService';
import DataContextFactory from '../../services/DataContextFactory';
import './LoginForm.css';

class LoginForm extends Component {
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

    onCustomerChange = (customerName) => {
        const {router} = this.props;
        const {customers} = this.state;

        // Save user in the browser's local storage
        localStorage.user = JSON.stringify(
            customers.find(c => {
                return c.name === customerName
            })
        );

        router.push('/');
    }

    onAnonymousLinkClicked = () => {
        localStorage.removeItem('user');
    }

    render() {
        const {customers} = this.state;
        return (
            <div className="login">
                <div className="login-logo">
                    <LogoIcon />
                </div>
                <div className="login-form">
                    <h2>Login</h2>
                    <div className="login-menu">
                        <span>As customer: {'\u00a0'}</span>
                        <DropDownMenu options={customers} onChange={this.onCustomerChange} />
                    </div>
                    <p>
                        <Link to="/" onClick={this.onAnonymousLinkClicked}>or continue without logging in...</Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);