import React from 'react';
import Hero06 from './hero-06/hero-06';

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    backgroundImageUrl?: string;
    children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title = 'Welcome to My App',
    subtitle = 'This is the hero section of your application.',
    backgroundImageUrl,
    children,
}) => {
    return (
        <section
            className=''
        >
           <Hero06 />
        </section>
    );
};

export default HeroSection;