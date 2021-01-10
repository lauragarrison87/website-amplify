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
                <h2>How do we spatially visualize different biomedical processes? What works, and what doesn't?</h2>
                <br/>
                <p>This is a companion site to our ongoing research exploring ways to <strong>more effectively communicate complex concepts in physiology and other biomedical processes</strong>. Explore higher resolution gallery images to the right.</p>
                <br/>
                <p>
                    <em>Interested in participating in our survey? </em>
                    How do you think about visualizing signalling in cells, and what happens when this process goes awry?
                </p>
                <p>
                    Email <strong>laura.garrison [at] uib.no</strong> to join in - we appreciate your thoughts and feedback!
                </p>
            </div>
        );
    }
}
export default Header;
