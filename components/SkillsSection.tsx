import React from 'react';

interface Skill {
    name: string;
    level: string;
}

interface SkillsSectionProps {
    title?: string;
    skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title = 'Skills', skills }) => (
    <section>
        <h2>{title}</h2>
        <ul>
            {skills.map((skill, idx) => (
                <li key={idx}>
                    <strong>{skill.name}</strong>: {skill.level}
                </li>
            ))}
        </ul>
    </section>
);

export default SkillsSection;