import React, { Component } from 'react';
import TimeLine from './frontend/timeline/timeline';
import Header from './frontend/header/header';


import './App.css';

class App extends Component {    

    render() {
        return (
            <div className="App">
                <Header />
                <TimeLine />
            </div>
        );
    }
}

export default App;
