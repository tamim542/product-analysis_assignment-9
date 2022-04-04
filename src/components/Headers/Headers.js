import React from 'react';
import './Headers.css';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (

        <div>
            <nav className='nav-bar'>
                <Link className='link-style' to="/home">Home</Link>
                <Link className='link-style' to="/reviews">Reviews</Link>
                <Link className='link-style' to="/dashboard">DASHBOARD</Link>
                <Link className='link-style' to="/blogs">Blogs</Link>
                <Link className='link-style' to="/about">About</Link>
                <Link className='' to="*"></Link>
            </nav>
        </div>

    );
};

export default Headers;