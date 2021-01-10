import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav'
import Header from './Components/Header'
import GalleryST from './Components/GalleryST'
import GalleryOA from './Components/GalleryOA'


class App extends Component {
    render() {
    return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <Header />
                    </div>
                    <div className="Gallery">
                        <Nav />
                        <GalleryST />
                        <GalleryOA />
                    </div>
                </div>
            </Router>
        );
}}
export default App;
