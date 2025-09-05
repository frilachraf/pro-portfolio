import React from 'react';

interface Project {
    title: string;
    description: string;
    link?: string;
}

interface ProjectsSectionProps {
    projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => (
    <section>
        <h2>Projects</h2>
        <ul>
            {projects.map((project, idx) => (
                <li key={idx}>
                    <h3>
                        {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        ) : (
                            project.title
                        )}
                    </h3>
                    <p>{project.description}</p>
                </li>
            ))}
        </ul>
    </section>
);

export default ProjectsSection;