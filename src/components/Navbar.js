import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
            <ul style={{ display: 'flex', listStyleType: 'none', gap: '1rem' }}>
                <li><Link to="/" style={{ color: '#61dafb', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/projects" style={{ color: '#61dafb', textDecoration: 'none' }}>Projects</Link></li>
                <li><Link to="/testimonials" style={{ color: '#61dafb', textDecoration: 'none' }}>Testimonials</Link></li>
                <li><Link to="/login" style={{ color: '#61dafb', textDecoration: 'none' }}>Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
