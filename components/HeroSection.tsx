import React from 'react';

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
            style={{
                background: backgroundImageUrl
                    ? `url(${backgroundImageUrl}) center/cover no-repeat`
                    : '#f5f5f5',
                padding: '80px 20px',
                color: '#222',
                textAlign: 'center',
                position: 'relative',
            }}
            className='h-screen'
        >
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{title}</h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{subtitle}</p>
                {children}
            </div>
        </section>
    );
};

export default HeroSection;