// import React, { Component } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Left from './components/Left';
import GalleryST from './components/GalleryST';
import GalleryCA from './components/GalleryCA';
import GalleryBF from './components/GalleryBF';
import GalleryAneurysm from './components/GalleryAneurysm';
import GalleryMetastasis from "./components/GalleryMetastasis";
import GalleryHome from "./components/GalleryHome";

const App=()=>
{
    return <Router>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <Left />
                </div>
                <div className="col-md-6 container-fluid Gallery">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={GalleryHome} />
                        <Route exact path='/GalleryMetastasis' component={GalleryMetastasis} />
                        <Route exact path='/GalleryST' component={GalleryST} />
                        <Route exact path='/GalleryCA' component={GalleryCA} />
                        <Route exact path='/GalleryBF' component={GalleryBF} />
                        <Route exact path='/GalleryAneurysm' component={GalleryAneurysm} />
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
}
export default App;

/*class App extends Component {
    render() {

    return (
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <Header />
                        </div>
                        <div className="col-md-6 container-fluid Gallery">
                            <Nav />
                            <Switch>
                                <Route exact path='/' component={GalleryHome} />
                                <Route exact path='/GalleryMetastasis' component={GalleryMetastasis} />
                                <Route exact path='/GalleryST' component={GalleryST} />
                                <Route exact path='/GalleryCA' component={GalleryCA} />
                                <Route exact path='/GalleryBF' component={GalleryBF} />
                                <Route exact path='/GalleryAneurysm' component={GalleryAneurysm} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
    );
    }}export default App;*/
