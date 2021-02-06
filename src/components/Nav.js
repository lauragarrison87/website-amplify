import React from 'react';
import { Link } from 'react-router-dom'

const Nav=()=>
{
    return <nav className="nav navbar sticky-top bg-light justify-content-end">
                <div className="container-fluid">
                    <div className="navbar-brand mb-0 h1">
                        <Link to='/'>Asset Gallery</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-link">
                                <Link to='/GalleryMetastasis'>Metastasis</Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link to='/GalleryST'>Signal Transduction</Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link to='/GalleryCA'>Constitutive Activation</Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link to='/GalleryBF'>Blood Flow</Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link to='/GalleryAneurysm'>Aneurysm</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
}
export default Nav

