import React from 'react';
import FooterComponent from './footer-05/footer-05';
import { createClient } from '@/lib/supabase/server';



interface ProfileProps {
    email?: string[]
}
const Footer: React.FC = async () => {
    
    const supabase = await createClient();
    const {data, error} = await supabase.from('profiles').select().eq('id', process.env.NEXT_PUBLIC_SUPABASE_CLIENT_USER_ID).limit(1)
    const profile: ProfileProps = data && data[0] || null
    if(error) return false  
    return (
        <section className='dark'>
            <FooterComponent profile={profile}/>
        </section>
    );
};

export default Footer;