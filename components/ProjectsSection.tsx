import React from 'react';
import { Timeline3 } from './AppTimeline3';

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
        <Timeline3 />
    </section>
);

export default ProjectsSection;