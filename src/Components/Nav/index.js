import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <header className="text-center pt-3">
            <h2 className="fs-1 fw-bolder">Dan Boothe</h2>
            <nav className="flex-row fs-4  mt-3 pb-3">
                <Link className="px-4 text-decoration-none text-dark" to='/'>About</Link>
                <Link className="px-4 text-decoration-none text-dark" to='/portfolio'>Portfolio</Link>
                <Link className="px-4 text-decoration-none text-dark" to='/contact'>Contact</Link>
                <Link className="px-4 text-decoration-none text-dark" to='/resume'>Resume</Link>
            </nav>
        </header>
    )
};

export default Nav;