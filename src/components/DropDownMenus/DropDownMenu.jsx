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