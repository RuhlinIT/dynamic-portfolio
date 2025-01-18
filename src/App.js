import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TabLayout from './layouts/TabLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Login from './pages/Login';

const App = () => {
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<TabLayout />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="testimonials" element={<Testimonials />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
