import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import GalleryST from './components/GalleryST';
import GalleryCA from './components/GalleryCA'

class App extends Component {
    render() {
    return (
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-md-8 App-header">
                            <Header />
                        </div>
                        <div className="col-xs-6 col-md-4 Gallery container-fluid">
                                <Nav />
                                {/*<div className='container'>*/}
                                    <Switch>
                                        <Route exact path='/' component={GalleryST} />
                                        <Route exact path='/GalleryST' component={GalleryST} />
                                        <Route exact path='/GalleryCA' component={GalleryCA} />
                                    </Switch>
                                {/*</div>*/}
                            </div>
                    </div>
                </div>
            </Router>
    );
    }}export default App;

/* ORIGINAL */
                /*<div className="App">
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
                </div>*/


