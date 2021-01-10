import React from 'react';
import {Link} from 'react-router-dom'

const Nav = ({title}) =>{

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <h3>
                {title}
            </h3>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to='/GalleryST'>Signal Transduction</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/GalleryOA'>Constitutive Activation</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

}
Nav.defaultProps={
    title:'Asset Gallery'
};
export default Nav

