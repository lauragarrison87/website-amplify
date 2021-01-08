import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1>Laura Garrison</h1>
                <p>Website update in progress. Check back soon!</p>
                {/*<img className="st9"
                 src={`${process.env.PUBLIC_URL}/assets/st10.gif`}
                 alt="st9.gif"/>*/}
            </div>
        );
    }
}
export default Header;
