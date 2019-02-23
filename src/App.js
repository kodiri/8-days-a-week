import React, { Component } from 'react';
import TimeLine from './frontend/timeline/timeline';
import { HashRouter, Route } from 'react-router-dom';
import Details from './frontend/Details/Details.js';



import './App.css';

class App extends Component {

    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Route exact path="/" component={TimeLine} />
                    <Route exact path="/:dayId" component={Details} />
                </div>
            </HashRouter>
        );
    }
}

export default App;
