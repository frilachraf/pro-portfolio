import React from 'react';
import Hero06 from './hero-06/hero-06';

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    children?: React.ReactNode;
    buttonText?: string;
    button2Text?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title = 'Welcome to My App',
    subtitle = 'This is the hero section of your application.',
    description = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText = 'Get Started',
    button2Text = 'Watch Demo',
}) => {
    return (
        <section
            className=''
            id='about'
        >
           <Hero06 title={title} description={description} buttonText={buttonText} button2Text={button2Text}/>
        </section>
    );
};

export default HeroSection;