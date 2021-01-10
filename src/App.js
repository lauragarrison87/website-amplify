import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav'
import Header from './Components/Header'
import GalleryST from './Components/GalleryST'
import GalleryCA from './Components/GalleryCA'


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
                        <div className='container'>
                            <Switch>
                                <Route exact path='/' component={GalleryST} />
                                <Route exact path='/GalleryST' component={GalleryST} />
                                <Route exact path='/GalleryCA' component={GalleryCA} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
}}
export default App;
