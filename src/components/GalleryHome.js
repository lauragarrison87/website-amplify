import React, { Component } from 'react';
import {Link} from "react-router-dom";

class GalleryHome extends Component {
    render() {
        return (
            <div className="gallery-wrapper">
                <br/>
                <div className="row">
                    <div className="col-md-6 img-gallery-item">
                        <Link to='/GalleryMetastasis'>Metastasis</Link>
                        <img className='img-thumbnail'
                             src={`${process.env.PUBLIC_URL}/assets/metastasis/metastasis_l-325.gif`}
                             alt="metastasis_l-325.gif"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 img-gallery-item">
                        <Link to='/GalleryST'>Signal Transduction</Link>
                        <img className='img-thumbnail'
                             src={`${process.env.PUBLIC_URL}/assets/st/stRealisticLarger.gif`}
                             alt="st10.gif"
                        />
                    </div>
                    <div className="col-md-6 img-gallery-item">
                        <Link to='/GalleryCA'>Constitutive Activation</Link>
                        <img className='img-thumbnail'
                             src={`${process.env.PUBLIC_URL}/assets/oa/oaRealisticLarger.gif`}
                             alt="oa10.gif"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default GalleryHome;