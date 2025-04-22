import React from "react";
import './Navbar.css';

function Navbar() {
    let name = "<SC/>";

    return (
        <div className='navbar_container'>
            <div className='navbar_left'>{name}</div>
            <div className='navbar_right'>
                <p>
                    <a href="#about">About</a>
                </p>
                <p>
                    <a href="#tools">Tools</a>
                </p>
                <p>
                    <a href="#experience">Experience</a>
                </p>
                <p>
                    <a href="#projects">Projects</a>
                </p>
            </div>
        </div>
    )
}

export default Navbar;