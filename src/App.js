import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import GalleryST from './Components/GalleryST'


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <div className="Gallery">
                    <GalleryST />
                </div>
            </div>
        );
    }
}
export default App;
