import React from 'react';
import ReactPlayer from 'react-player'

const GalleryST=()=>
{
        return <div className='gallery-wrapper'>
                <p>All Content protected by <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/"  target = "_blank" rel = "noopener noreferrer">Creative Commons Non-Commercial Share Alike License</a>. Use, share, or adapt these assets for research/non-commercial purposes with attribution to Laura Garrison.</p>
                {/*<p>Content <span>&#169;</span> Laura Garrison. All rights reserved.</p>*/}
                <h3>Signal Transduction: N</h3>
                {/*<img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/st/stRealisticLarger.gif`}
                     width='100%'
                     height='100%'
                     alt="st10.gif"/>*/}
                <ReactPlayer
                    className='react-player-item'
                    url='https://laura-uib.s3.eu-north-1.amazonaws.com/stRealisticLarger.mp4'
                    width='100%'
                    height='100%'
                    controls={true}
                    loop={true}
                    playing={true}
                    onReady={() => console.log('onReady callback')}
                    onError={() => console.log('onError callback')}
                    alt="stRealisticLarger.mp4"
                />

                <h3>Signal Transduction: M</h3>
                {/*<img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/st/stPrimitiveLarger.gif`}
                     width='100%'
                     height='100%'
                     alt="st9.gif"/>*/}
                <ReactPlayer
                    className='react-player-item'
                    url='https://laura-uib.s3.eu-north-1.amazonaws.com/stPrimitiveLarger.mp4'
                    width='100%'
                    height='100%'
                    controls={true}
                    loop={true}
                    playing={true}
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')}
                    alt="stPrimitiveLarger.mp4"
                />
                    <h3>Signal Transduction: L</h3>
                    <img className='img-gallery-item'
                         src={`${process.env.PUBLIC_URL}/assets/st/st8.gif`}
                         width='100%'
                         height='100%'
                         alt="st8.gif"/>

                    <h3>Signal Transduction: K</h3>
                    <img className='img-gallery-item'
                         src={`${process.env.PUBLIC_URL}/assets/st/st8.png`}
                         width='100%'
                         height='100%'
                         alt="st8.png"/>

                <h3>Signal Transduction: J</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/st/st7.png`}
                     width='100%'
                     height='100%'
                     alt="st7.png"/>

                <h3>Signal Transduction: I</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/st/st6.gif`}
                     width='100%'
                     height='100%'
                     alt="st6.gif"/>

                <h3>Signal Transduction: H</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/st/st6.png`}
                     width='100%'
                     height='100%'
                     alt="st6.png"/>

                <h3>Signal Transduction: G</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/st/st5.png`}
                     width='100%'
                     height='100%'
                     alt="st5.png"/>

                <h3>Signal Transduction: F</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/st/st4.gif`}
                     width='100%'
                     height='100%'
                     alt="st4.gif"/>

                <h3>Signal Transduction: E</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/st/st4.png`}
                     width='100%'
                     height='100%'
                     alt="st4.png"/>


                <h3>Signal Transduction: D</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/st/st3.png`}
                     width='100%'
                     height='100%'
                     alt="st3.png"/>

                <h3>Signal Transduction: C</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/st/st3.gif`}
                     width='100%'
                     height='100%'
                     alt="st3.gif"/>

                <h3>Signal Transduction: B</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/st/st2.png`}
                     width='100%'
                     height='100%'
                     alt="st2.png"/>

                <h3>Signal Transduction: A</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/st/st1.png`}
                     width='100%'
                     height='100%'
                     alt="st1.png"/>
            </div>
}
export default GalleryST;

