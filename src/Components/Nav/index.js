import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="nav">
            <Link className="nav-link" to='/work'>My Work</Link>
            <Link className="nav-link" to='/resume'>Resume</Link>
            <Link className="nav-link" to='/about'>About</Link>
            <Link className="nav-link" to='/contact'>Contact</Link>
        </nav>
    )
};

export default Nav;