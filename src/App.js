import React, { Component } from 'react';
import { Route } from 'react-router';

import './App.css';
import Main from './js/components/Main';


class App extends Component {

    render() {
        return (
            <div className="App">
                <Route exact path="/" component={Main}/>
            </div>
        );
    }

}

export default App;
