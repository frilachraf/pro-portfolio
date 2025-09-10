import React from 'react';
import { createClient } from '@/lib/supabase/server';
import AppTimeline3 from './AppTimeline3';
import { getProjects } from '@/services/data';

interface Project {
    title: string;
    description: string;
    link?: string;
}

interface ProjectsSectionProps {
    projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = async ({ }) => 
  { 
    const supabase = await createClient();
    const { data: projects } = await supabase.from("projects").select('').eq('profile_id', process.env.NEXT_PUBLIC_SUPABASE_CLIENT_USER_ID);

    return  (
    <section className='w-full max-w-screen-xl mx-auto px-6 xl:px-0' id='projects'>
        {projects &&
        <AppTimeline3 data={projects} />
        }
    </section>
)}

export default ProjectsSection;