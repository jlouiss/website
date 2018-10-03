import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Main from './js/components/Main';


class App extends Component {

    render() {
        return (
            <div className="App">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Route exact path="/" component={Main}/>
                </BrowserRouter>
            </div>
        );
    }

}

export default App;
