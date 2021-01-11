import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class GalleryCA extends Component {
    render() {
        return (
            <div className='gallery-wrapper'>
                    <p>Content <span>&#169;</span> Laura Garrison. All rights reserved.</p>
                <h3>Constitutive Activation: N</h3>
                    <img className='img-gallery-item'
                         src={`${process.env.PUBLIC_URL}/assets/oa/oaRealisticLarger.gif`}
                         width='100%'
                         height='100%'
                         alt="oa10.gif"/>
                {/*<ReactPlayer
                    className='react-player-item'
                    url={`${process.env.PUBLIC_URL}/assets/oa/oaRealisticLarger.mp4`}
                    width='100%'
                    height='100%'
                    controls={true}
                    loop={true}
                    onReady={() => console.log('onReady callback')}
                    onError={() => console.log('onError callback')}
                    alt="oaRealisticLarger.mp4"
                />*/}

                <h3>Constitutive Activation: M</h3>
                    <img className='img-gallery-item'
                         src={`${process.env.PUBLIC_URL}/assets/oa/oaPrimitiveLarger.gif`}
                         width='100%'
                         height='100%'
                         alt="oa9.gif"/>
                {/*<ReactPlayer
                    className='react-player-item'
                    url={`${process.env.PUBLIC_URL}/assets/oa/oaPrimitiveLarger.mp4`}
                    width='100%'
                    height='100%'
                    controls={true}
                    loop={true}
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')}
                    alt="oaPrimitiveLarger.mp4"
                />*/}
                <h3>Constitutive Activation: L</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/oa/oa8.gif`}
                     width='100%'
                     height='100%'
                     alt="oa8.gif"/>

                <h3>Constitutive Activation: K</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/oa/oa8.png`}
                     width='100%'
                     height='100%'
                     alt="oa8.png"/>

                <h3>Constitutive Activation: J</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/oa/oa7.png`}
                     width='100%'
                     height='100%'
                     alt="oa7.png"/>

                <h3>Constitutive Activation: I</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/oa/oa6.gif`}
                     width='100%'
                     height='100%'
                     alt="oa6.gif"/>

                <h3>Constitutive Activation: H</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/oa/oa6.png`}
                     width='100%'
                     height='100%'
                     alt="oa6.png"/>

                <h3>Constitutive Activation: G</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/oa/oa5.png`}
                     width='100%'
                     height='100%'
                     alt="oa5.png"/>

                <h3>Constitutive Activation: F</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/oa/oa4.gif`}
                     width='100%'
                     height='100%'
                     alt="oa4.gif"/>

                <h3>Constitutive Activation: E</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/oa/oa4.png`}
                     width='100%'
                     height='100%'
                     alt="oa4.png"/>


                <h3>Constitutive Activation: D</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/oa/oa3.png`}
                     width='100%'
                     height='100%'
                     alt="oa3.png"/>

                <h3>Constitutive Activation: C</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/oa/oa2.gif`}
                     width='100%'
                     height='100%'
                     alt="oa2.gif"/>

                <h3>Constitutive Activation: B</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/oa/oa2.png`}
                     width='100%'
                     height='100%'
                     alt="oa2.png"/>

                <h3>Constitutive Activation: A</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/oa/oa1.png`}
                     width='100%'
                     height='100%'
                     alt="oa1.png"/>
            </div>
        );
    }}
export default GalleryCA;

