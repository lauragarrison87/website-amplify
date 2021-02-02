import React, { Component } from 'react';

class GalleryAneurysm extends Component {
    render() {
        return (
            <div className='gallery-wrapper'>
                <p>All Content protected by <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/"  target = "_blank" rel = "noopener noreferrer">Creative Commons Non-Commercial Share Alike License</a>. Use, share, or adapt these assets for research/non-commercial purposes with attribution to Laura Garrison.</p>

                <h3>Aneurysm: A</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/aneurysm/a-arrow-static.png`}
                     width='100%'
                     height='100%'
                     alt="a-arrow-static.png"/>

                <h3>Aneurysm: B</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/aneurysm/a-arrows.png`}
                     width='100%'
                     height='100%'
                     alt="a-arrows.png"/>

                <h3>Aneurysm: C</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/aneurysm/a-inner.png`}
                     width='100%'
                     height='100%'
                     alt="a-inner.png"/>

                <h3>Aneurysm: D</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/aneurysm/a-outer.png`}
                     width='100%'
                     height='100%'
                     alt="a-outer.png"/>

                <h3>Aneurysm: E</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/aneurysm/a-rbc-static.png`}
                     width='100%'
                     height='100%'
                     alt="a-rbc-static.png"/>

                <h3>Aneurysm: F</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/aneurysm/a-rupture.png`}
                     width='100%'
                     height='100%'
                     alt="a-rupture.png"/>

                <h3>Aneurysm: G</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/aneurysm/a-streamlines.png`}
                     width='100%'
                     height='100%'
                     alt="a-streamlines.png"/>

                <h3>Aneurysm: H</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/aneurysm/a-streamtubes.png`}
                     width='100%'
                     height='100%'
                     alt="a-streamtubes.png"/>

                <h3>Aneurysm: I</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/aneurysm/a-treamribbons.png`}
                     width='100%'
                     height='100%'
                     alt="a-treamribbons.png"/>


                <h3>Aneurysm: J</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/aneurysm/aneurysm-particles-time.gif`}
                     width='100%'
                     height='100%'
                     alt="aneurysm-particles-time.gif"/>

                    <h3>Aneurysm: K</h3>
                    <img className='img-gallery-item'
                         src={`${process.env.PUBLIC_URL}/assets/aneurysm/aneurysm-arrow.gif`}
                         width='100%'
                         height='100%'
                         alt="aneurysm-arrow.gif"/>

                <h3>Aneurysm: L</h3>
                <img className='img-gallery-item'
                     src={`${process.env.PUBLIC_URL}/assets/aneurysm/aneurysm-rbc.gif`}
                     width='100%'
                     height='100%'
                     alt="aneurysm-rbc.gif"/>





            </div>
        );
    }}
export default GalleryAneurysm;

