import React, { Component } from 'react';
import ReactPlayer from "react-player";

class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" />
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} />
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className='img-gallery'
                             src={`${process.env.PUBLIC_URL}/assets/st/st1.png`}
                             width='100%'
                             height='100%'
                             alt="st1.png"/>
                    </div>
                    <div className="carousel-item">
                        <img className='img-gallery'
                             src={`${process.env.PUBLIC_URL}/assets/st/st2.png`}
                             width='100%'
                             height='100%'
                             alt="st2.png"/>
                    </div>
                    <div className="carousel-item">
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
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        );
    }}
export default Carousel
