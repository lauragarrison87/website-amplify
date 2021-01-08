import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Gallery extends Component {
    render() {
        return (
            <div className='player-wrapper'>
                <h2>Signal Transduction Supplementary Asset Gallery</h2>
                <h3>Signal Transduction: Primitive Shapes</h3>
                <ReactPlayer
                    className='react-player'
                    url={`${process.env.PUBLIC_URL}/assets/stPrimitiveLarger.mp4`}
                    width='100%'
                    height='100%'
                    controls={true}
                    loop={true}
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')}
                />

                <h3>Signal Transduction: Realistic Shapes</h3>
                <ReactPlayer
                    className='react-player'
                    // url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    url={`${process.env.PUBLIC_URL}/assets/stRealisticLarger.mp4`}
                    width='100%'
                    height='100%'
                    controls={true}
                    loop={true}
                    onReady={() => console.log('onReady callback')}
                    onError={() => console.log('onError callback')}
                />

                <h3>Constitutive Activation: Primitive Shapes</h3>
                <ReactPlayer
                    className='react-player'
                    url={`${process.env.PUBLIC_URL}/assets/stPrimitiveLarger.mp4`}
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
                    url={`${process.env.PUBLIC_URL}/assets/stRealisticLarger.mp4`}
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
export default Gallery;

