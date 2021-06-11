import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <header>
            <h2>Dan Boothe</h2>
            <nav>
                <Link to='/'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/resume'>Resume</Link>
            </nav>
        </header>
    )
};

export default Nav;