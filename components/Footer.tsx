import React from 'react';
import FooterComponent from './footer-05/footer-05';
import { createClient } from '@/lib/supabase/server';

const Footer: React.FC = async () => {
    
    const supabase = await createClient();
    const {data}: any = await supabase.from('profiles').select().eq('id', process.env.NEXT_PUBLIC_SUPABASE_CLIENT_USER_ID).limit(1)
    const profile = data[0]
      
    return (
        <>
        <FooterComponent profile={profile}/>
        </>
    );
};

export default Footer;