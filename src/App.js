import React, { Component } from 'react';
import './App.css';

import CmsApp from './components/CmsApp';
import NowApp from './components/NowApp';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CmsApp />
                <NowApp />
            </div>
        );
    }
}

export default App;
