import React from 'react';
import FooterComponent from './footer-05/footer-05';
import { createClient } from '@/lib/supabase/server';



interface Profile {
  id: string;
  title?: string;
  headline?: string;
  subline?: string;
  email?: string;
  github?: string;
  figma?: string;
  discord?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
}

const Footer: React.FC = async () => {
    
    const supabase = await createClient();
    const { data: profile, error } = await supabase
    .from('profiles')
    .select()
    .eq("id", process.env.NEXT_PUBLIC_SUPABASE_CLIENT_USER_ID)
    .single<Profile>();
    if(error) return false  
    return (
        <section className='dark'>
            <FooterComponent profile={profile}/>
        </section>
    );
};

export default Footer;