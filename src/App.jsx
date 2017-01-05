import React, { Component } from 'react';
// import DropDownMenu from './components/DropDownMenu/DropDownMenu';
// import DataService from './services/DataService';
// import DataContextFactory from './services/DataContextFactory';
import './App.css';

class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentWillMount() {
    //     const {state} = this;
    //     this.customerDataService.get((err, res) => {
    //         if (err) throw err;
    //         state.customers = res;
    //     });
    //     this.setState(state);
    // }

    render() {
        const {children} = this.props;

        return (
            <div className="app">
                {children}
            </div>
        );
    }
}

export default App;