import React from 'react';

interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
}

interface ExperienceSectionProps {
    experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => (
    <section>
        <h2>Experience</h2>
        <ul>
            {experiences.map((exp, idx) => (
                <li key={idx}>
                    <h3>{exp.role} @ {exp.company}</h3>
                    <span>{exp.period}</span>
                    <p>{exp.description}</p>
                </li>
            ))}
        </ul>
    </section>
);

export default ExperienceSection;