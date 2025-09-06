import React from 'react';

import VerticalLeftBorderedTabsDemo from './tabs-14';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, PcCase, PenIcon } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';

interface Skill {
    name: string;
    level: string;
}

interface SkillsSectionProps {
    title?: string;
    description?: string;
    skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = async ({ title = 'Skills', skills, description = "" }) => 
    {
        const TriggerclassName = "w-full justify-start data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-foreground rounded-none px-4 py-2  data-[state=active]:shadow-none text-foreground/50 dark:text-muted-foreground data-[state=active]:"
         const supabase = await createClient();
             const { data: technologies } = await supabase.from("technologies").select();
        return (
    <section className='px-10'>
        <h1 className="mb-3 mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg">
            {description}
          </p>
        <Tabs defaultValue="Frontend" className="gap-6 p-4">
            <TabsList className='border rounded bg-muted-'>
                <TabsTrigger className={TriggerclassName} value="Design">
                    <PenIcon className="me-2 h-4 w-4" />
                    Design</TabsTrigger>
                <TabsTrigger className={TriggerclassName} value="Backend">
                    <Database className="me-2 h-4 w-4" />
                    Backend</TabsTrigger>
                <TabsTrigger className={TriggerclassName} value="Frontend">
                    <PcCase className="me-2 h-4 w-4" />
                    Frontend</TabsTrigger>

            </TabsList>
            <div className="col-span-2 ">
                <TabsContent value="Design">Make changes to your account here.</TabsContent>
                <TabsContent value="Backend">Change your password here.</TabsContent>
                <TabsContent value="Frontend">
                    <div className="flex gap-4 flex-wrap">
                        {technologies && technologies.map((tech) => {
                        return (
                            <div className="bg-muted rounded px-6 py-3 border flex">
                                {tech.icon && <img src={tech.icon} alt={tech.name} className='w-6 h-6 me-2' />}
                                <span className='font-medium text-forground'>{tech.name}</span>
                            </div>                        )
                    })}
                    </div>
                    {/* {<pre>{JSON.stringify(technologies, null, 2)}</pre>} */}
                </TabsContent>
            </div>
        </Tabs>
    </section>
)}

export default SkillsSection;