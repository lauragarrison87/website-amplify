import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class GalleryST extends Component {
    render() {
        return (
            <div className='player-wrapper'>
                <h2>Signal Transduction Supplementary Asset Gallery</h2>
                <h3>Signal Transduction: Primitive Shapes A</h3>
                <img className='img-gallery'
                     src={`${process.env.PUBLIC_URL}/assets/st/st1.png`}
                     width='100%'
                     height='100%'
                     alt="st1.png"/>

                <h3>Signal Transduction: Primitive Shapes B</h3>
                <img className='img-gallery'
                     src={`${process.env.PUBLIC_URL}/assets/st/st2.png`}
                     width='100%'
                     height='100%'
                     alt="st2.png"/>

                <h3>Signal Transduction: Primitive Shapes</h3>
                <ReactPlayer
                    className='react-player'
                    url={`${process.env.PUBLIC_URL}/assets/st/stPrimitiveLarger.mp4`}
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
                    url={`${process.env.PUBLIC_URL}/assets/st/stRealisticLarger.mp4`}
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

