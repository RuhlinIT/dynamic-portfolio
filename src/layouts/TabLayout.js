import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const TabLayout = () => {
    return (
        <div>
            <nav style={{ padding: '1rem', backgroundColor: '#444', color: '#fff' }}>
                <ul style={{ display: 'flex', listStyleType: 'none', gap: '1rem' }}>
                    <li><Link to="/" style={{ color: '#61dafb', textDecoration: 'none' }}>Home</Link></li>
                    <li><Link to="/projects" style={{ color: '#61dafb', textDecoration: 'none' }}>Projects</Link></li>
                    <li><Link to="/testimonials" style={{ color: '#61dafb', textDecoration: 'none' }}>Testimonials</Link></li>
                    <li><Link to="/login" style={{ color: '#61dafb', textDecoration: 'none' }}>Login</Link></li>
                </ul>
            </nav>
            <div style={{ padding: '1rem' }}>
                <Outlet /> {/* Render child routes here */}
            </div>
        </div>
    );
};

export default TabLayout;
