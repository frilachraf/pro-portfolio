import React from 'react';
import { Timeline3 } from './AppTimeline3';
import { createClient } from '@/lib/supabase/server';

interface Project {
    title: string;
    description: string;
    link?: string;
}

interface ProjectsSectionProps {
    projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = async ({ projects }) => 
  { 
   const supabase = await createClient();
  const { data: instruments } = await supabase.from("projects").select();
 
    return  (
    <section>
        <h2>Projects</h2>
        <Timeline3 />
        {<pre>{JSON.stringify(instruments, null, 2)}</pre>}
    </section>
)}

export default ProjectsSection;