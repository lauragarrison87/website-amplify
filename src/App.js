import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Gallery from './Components/Gallery'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header />
                    <p>Website update in progress. Check back soon!</p>
                </header>
                <div className="Gallery">
                    <Gallery />
                </div>
            </div>
        );
    }
}
export default App;
