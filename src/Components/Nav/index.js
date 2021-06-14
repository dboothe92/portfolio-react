import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <header className="text-center pt-3 pb-2">
            <h2><Link className="fs-1 fw-bolder text-decoration-none text-dark" to='/'>Daniel Boothe</Link></h2>
            <nav className="flex-row fs-4  mt-3 pb-3">
                <Link className="px-4 text-decoration-none text-dark" to='/work'>My Work</Link>
                <Link className="px-4 text-decoration-none text-dark" to='/resume'>Resume</Link>
                <Link className="px-4 text-decoration-none text-dark" to='/about'>About</Link>
                <Link className="px-4 text-decoration-none text-dark" to='/contact'>Contact</Link>
                
            </nav>
        </header>
    )
};

export default Nav;