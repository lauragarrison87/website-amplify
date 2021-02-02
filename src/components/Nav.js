import React, { Component } from 'react';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return(
/*            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Asset Gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/!*<Nav.Link to='/GalleryST'>Signal Transduction</Nav.Link>
                        <Nav.Link to='/GalleryCA'>Constitutive Activation</Nav.Link>*!/}
                        <Link to='/GalleryST'>Signal Transduction</Link>
                        <Link to='/GalleryCA'>Constitutive Activation</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>*/

            <nav className="navbar sticky-top navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand mb-0 h1">
                        <Link to='/'>Asset Gallery</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-link">
                                <Link to='/GalleryMetastasis'>Metastasis</Link>
                            </li>
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

