import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Gallery from './Components/Gallery'
import Nav from './Components/Nav'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <div className="Gallery">
                    <Nav />
                    <Gallery />
                </div>
            </div>
        );
    }
}
export default App;
