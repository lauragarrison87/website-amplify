import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return(
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand mb-0 h1">
                        <Link to='/'>Asset Gallery</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-link active">
                                <Link to='/GalleryST'>Signal Transduction</Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link to='/GalleryCA'>Constitutive Activation</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Nav

