import React from 'react';
import { createClient } from '@/lib/supabase/server';
import ProjectsTimeline from './AppTimeline3';
import { getProjects } from '@/services/data';
import { AnimatedTooltip } from './ui/animated-tooltip';

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
    const { data: projects }: any = await supabase
    .from("projects").select('*, project_tools(*, tool:technologies(*))')
    .eq('profile_id', process.env.NEXT_PUBLIC_SUPABASE_CLIENT_USER_ID)
    .order("end_at", { ascending: false });

    return  (
    <section className='w-full max-w-screen-xl mx-auto px-6 xl:px-0' id='projects'>
        {projects &&
        <ProjectsTimeline data={projects} />
        }
        <div className="flex flex-row items-center justify-center mb-10 w-full">
      
    </div>
    </section>
)}

export default ProjectsSection;