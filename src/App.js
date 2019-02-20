import React, { Component } from 'react';
import TimeLine from './frontend/timeline/timeline';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from './frontend/Details/Details.js';



import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={TimeLine} />
                    <Route exact path="/details" component={Details} />
                    
                </div>
            </Router>
        );
    }
}

export default App;
