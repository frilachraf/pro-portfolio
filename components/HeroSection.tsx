import React from 'react';
import Hero06 from './hero-06/hero-06';
import { CgMouse } from "react-icons/cg";
import { createClient } from '@/lib/supabase/server';

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    about_me?: string;
}

const HeroSection: React.FC<HeroSectionProps> = async ({
}) => {


    const supabase = await createClient();
    const {data}: any = await supabase.from('profiles').select().eq('id', process.env.NEXT_PUBLIC_SUPABASE_CLIENT_USER_ID).limit(1)
    const profile = data[0]
    return (
        <section
            className='relative max-h-screen'
            id='about'
        >
            {profile && 
            <Hero06 title={profile?.title} headline={profile?.headline} description={profile?.Subline} />
            }
            <div className="absolute bottom-0 w-full left-0 right-0 flex items-center justify-center">
                <CgMouse className='-translate-y-10 text-3xl sm:text-4xl animate-bounce text-primary '/>
            </div>
        </section>
    );
};

export default HeroSection;