import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class GalleryST extends Component {
    render() {
        return (
            <div className='player-wrapper'>
                <h2>Constitutive Activation Supplementary Asset Gallery</h2>

                <h3>Constitutive Activation: Primitive Shapes</h3>
                <ReactPlayer
                    className='react-player'
                    url={`${process.env.PUBLIC_URL}/assets/oa/oaPrimitiveLarger.mp4`}
                    width='100%'
                    height='100%'
                    controls={true}
                    loop={true}
                    onReady={() => console.log('onReady callback')}
                    onError={() => console.log('onError callback')}
                />

                <h3>Constitutive Activation: Realistic Shapes</h3>
                <ReactPlayer
                    className='react-player'
                    url={`${process.env.PUBLIC_URL}/assets/oa/oaRealisticLarger.mp4`}
                    width='100%'
                    height='100%'
                    controls={true}
                    loop={true}
                    onReady={() => console.log('onReady callback')}
                    onError={() => console.log('onError callback')}
                />
            </div>
        );
    }}
export default GalleryST;

