import React from 'react';
import VerticalLeftBorderedTabsDemo from './tabs-14';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
interface Skill {
    name: string;
    level: string;
}

interface SkillsSectionProps {
    title?: string;
    skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title = 'Skills', skills }) => (
    <section>
        <Tabs defaultValue="account" className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            <TabsList className='col-span-1 flex-col bg- w-full h-full  items-start justify-start border rounded bg-muted'>
                <TabsTrigger className='w-full justify-start' value="Design">Design</TabsTrigger>
                <TabsTrigger className='w-full justify-start' value="Backend">Backend</TabsTrigger>
                <TabsTrigger className='w-full justify-start' value="Frontend">Frontend</TabsTrigger>

            </TabsList>
            <div className="bg-muted col-span-2">
                <TabsContent value="Design">Make changes to your account here.</TabsContent>
                <TabsContent value="Backend">Change your password here.</TabsContent>
                <TabsContent value="Frontend">Frontt</TabsContent>
            </div>
        </Tabs>
    </section>
);

export default SkillsSection;