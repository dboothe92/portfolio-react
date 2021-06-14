import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const mouseOver = (e) => {
        e.target.style.color ="#000000";
    }
    return(
        <header className="text-center pt-3 pb-2">
            <h2><Link className="fs-1 fw-bolder text-decoration-none header-text" to='/'>DANIEL BOOTHE</Link></h2>
            <nav className="flex-row fs-4 mt-3 pb-3">
                <Link className="px-4 text-decoration-none header-text" to='/work'>My Work</Link>
                <Link className="px-4 text-decoration-none header-text" to='/resume'>Resume</Link>
                <Link className="px-4 text-decoration-none header-text" to='/about'>About</Link>
                <Link className="px-4 text-decoration-none header-text" to='/contact'>Contact</Link>
                
            </nav>
        </header>
    )
};

export default Nav;