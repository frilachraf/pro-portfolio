import React from 'react';
import Hero06 from './hero-06/hero-06';
import { CgMouse } from "react-icons/cg";

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
            className='relative max-h-screen '
            id='about'
        >
           <Hero06 title={title} description={description} buttonText={buttonText} button2Text={button2Text}/>
            <div className="absolute bottom-0 w-full left-0 right-0 flex items-center justify-center">
                <CgMouse className='-translate-y-10 text-3xl lg:text-7xl animate-bounce text-primary '/>
            </div>

        </section>
    );
};

export default HeroSection;