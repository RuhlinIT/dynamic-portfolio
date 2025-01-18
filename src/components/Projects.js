import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const token = localStorage.getItem('jwtToken');
            const response = await axios.get('/api/projects', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setProjects(response.data);
        };

        fetchProjects();
    }, []);

    return (
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;
