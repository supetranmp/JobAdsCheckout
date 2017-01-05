import React, { PropTypes } from 'react';
import AdTypes from '../../libs/AdTypes';
import PricingRuleTypes from '../../libs/PricingRuleTypes';

const CustomersDropDownMenu = (props) => {
    const {customers} = props;

    return (
        <select name='customers'>
            <option disabled selected value> -- select an customer -- </option>
            {
                (customers && customers.length) &&
                customers.map((customer) => {
                    return (
                        <option value={customer.name}>{customer.name}</option>
                    );
                })
            }
        </select>
    );
};

CustomersDropDownMenu.props = {
    customers: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        pricingRules: PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.shape({
                type: PropTypes.oneOf([PricingRuleTypes.RATIO]).isRequired,
                itemId: PropTypes.oneOf(Object.keys(AdTypes)).isRequired,
                numerator: PropTypes.number.isRequired,
                denominator: PropTypes.number.isRequired
            }),
            PropTypes.shape({
                type: PropTypes.oneOf([PricingRuleTypes.PRICE]).isRequired,
                itemId: PropTypes.oneOf(Object.keys(AdTypes)).isRequired,
                price: PropTypes.number.isRequired
            }),
            PropTypes.shape({
                type: PropTypes.oneOf([PricingRuleTypes.QUANTITY]).isRequired,
                itemId: PropTypes.oneOf(Object.keys(AdTypes)).isRequired,
                quantity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired
            })

        ]))
    }))
};

export default CustomersDropDownMenu;