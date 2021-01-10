import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import GalleryST from './Components/GalleryST'
// import GalleryOA from './Components/GalleryOA'


class App extends Component {
    constructor(props){
        super(props)

        // Set initial state
        this.state = {
            galleryIndex : 0
        }

        // Binding 'this' keyword
        this.swapComponent = this.swapComponent.bind(this)
    }

    // Changing state
    swapComponent(){
        this.swapComponent({currentComponent : 'Welcome to the React world!'})
    }


/*
    swapComponent(name) {
        console.log(name);
        switch (name) {
            case "showHideGalleryST":
                this.setState({showHideGalleryST: !this.state.showHideGalleryST});
                break;
            case "showHideGalleryOA":
                this.setState({showHideGalleryOA: !this.state.showHideGalleryOA});
            case "showHideGalleryBF":
                this.setState({showHideGalleryBF: !this.state.showHideGalleryBF});
        }

    }
*/

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>

                <div className="Gallery">
                    {/*<div className="GalleryNav">
                        <button onClick={() => this.swapComponent("showHideGalleryST")}>ST Gallery</button>
                        <button onClick={() => this.swapComponent("showHideGalleryOA")}>CA Gallery</button>
                        <button onClick={() => this.swapComponent("showHideGalleryBF")}>BF Gallery</button>
                    </div>
                    {{showHideGalleryST && <GalleryST />}
                    {showHideGalleryOA && <GalleryOA />}
                    {showHideGalleryBF && <GalleryBF />}}*/}

                        <h2>Message :</h2>

                        <p>{this.state.currentComponent}</p>

                        {/* Set click handler */}
                        <button onClick={this.swapComponent}>
                            Click here!
                        </button>
                </div>
            </div>
        );
    }
}
export default App;
