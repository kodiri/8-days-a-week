import React, { Component } from 'react';
import TimeLine from './frontend/timeline/timeline';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from './frontend/Details/Details.js';
import Header from './frontend/header/header';


import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <TimeLine />
                    <Route exact path="/" component={TimeLine} />
                    <Route exact path="/details" component={Details} />
                    
                </div>
            </Router>
        );
    }
}

export default App;
