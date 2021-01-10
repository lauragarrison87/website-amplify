import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class GalleryOA extends Component {
    render() {
        return (
            <div className='player-wrapper'>
                <p>Constitutive Activation: Primitive Shapes</p>
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

                <p>Constitutive Activation: Realistic Shapes</p>
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
export default GalleryOA;

