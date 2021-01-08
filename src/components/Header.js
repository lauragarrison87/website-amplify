import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1 className="display-3">Laura Garrison</h1>
                <p>
                    Visualization PhD Candidate<br/>
                    University of Bergen, Norway
                </p>
                <br/>
                <h1>How do we spatially represent different biomedical processes?</h1>
                <br/>
                <p>This is a companion site to our ongoing research exploring ways to <strong>more effectively communicate complex concepts in physiology and other biomedical processes</strong>. Explore higher resolution gallery images to the right, accessing topics by the links below:</p>
                {/*<img className="st9"
                 src={`${process.env.PUBLIC_URL}/assets/st10.gif`}
                 alt="st9.gif"/>*/}
                 <ul>
                     <li>Signal Transduction</li>
                     <li>Constitutive Activation</li>
                 </ul>
            </div>
        );
    }
}
export default Header;
