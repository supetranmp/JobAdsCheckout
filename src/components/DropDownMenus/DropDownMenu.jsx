import React, { Component, PropTypes } from 'react';
import './DropDownMenu.css';

class DropDownMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'select'
        }
    }

    onChangeHandler = (e) => {
        const {value} = e.target;
        this.setState({
            value: value
        }, () => {
            const {onChange} = this.props;
            if (onChange) {
                onChange(value)
            }
        });
    };

    render() {
        const {value} = this.state;
        const {options} = this.props;

        return (
            <select
                className="drop-down-menu"
                name="customers"
                value={value} onChange={this.onChangeHandler}>
                <option disabled value="select"> -- select an customer -- </option>
                {
                    (options && options.length) &&
                    options.map((o) => {
                        return (
                            <option
                                key={o.id || o.name}
                                value={o.id || o.name}>
                                {o.name}
                            </option>
                        );
                    })
                }
            </select>
        );
    }
};

DropDownMenu.props = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
            name: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
        })
    ),
    onChange: PropTypes.event
};

export default DropDownMenu;

// CustomersDropDownMenu.props = {
//     customers: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         pricingRules: PropTypes.arrayOf(PropTypes.oneOfType([
//             PropTypes.shape({
//                 type: PropTypes.oneOf([PricingRuleTypes.RATIO]).isRequired,
//                 itemId: PropTypes.oneOf(Object.keys(AdTypes)).isRequired,
//                 numerator: PropTypes.number.isRequired,
//                 denominator: PropTypes.number.isRequired
//             }),
//             PropTypes.shape({
//                 type: PropTypes.oneOf([PricingRuleTypes.PRICE]).isRequired,
//                 itemId: PropTypes.oneOf(Object.keys(AdTypes)).isRequired,
//                 price: PropTypes.number.isRequired
//             }),
//             PropTypes.shape({
//                 type: PropTypes.oneOf([PricingRuleTypes.QUANTITY]).isRequired,
//                 itemId: PropTypes.oneOf(Object.keys(AdTypes)).isRequired,
//                 quantity: PropTypes.number.isRequired,
//                 price: PropTypes.number.isRequired
//             })
//         ]))
//     }))
// };