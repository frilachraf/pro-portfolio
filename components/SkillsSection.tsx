import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createClient } from "@/lib/supabase/server";
import { Database, PcCase, PenIcon } from "lucide-react";
import { FaStarOfLife } from "react-icons/fa6";
import { AppHeading2, AppHeadingDescription } from "./AppHeadings";
import Image from "next/image";

interface Skill {
  name: string;
  level: string;
  icon?: string;
}

interface SkillsSectionProps {
  title?: string;
  description?: string;
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = async ({
  title = "What Tools Do I Use to Bring Ideas to Life?",
  description = "From frontend polish to backend power, I use the right stack for the job.",
}) => {
  const TriggerclassName ="p-4 w-full justify-start"
  // "w-full justify-center data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-foreground rounded-none px-4 py-2  data-[state=active]:shadow-none text-foreground/50 dark:text-muted-foreground border-b-2 border-transparent data-[state=active]:border-b-primary data-[state=active]:bg-red-500 hover:bg-accent hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background";
  
  
      const supabase = await createClient();
  const { data: technologies } = await supabase.from("technologies").select();
  const frontends = technologies?.filter(
    (tech) => tech.category === "frontend"
  );
  const backends = technologies?.filter((tech) => tech.category === "backend");
  const designs = technologies?.filter((tech) => tech.category === "design");
  const otherTools = technologies?.filter((tech) => !["frontend","backend","design"].includes(tech.category));
  return (
    <section id="skills" className="py-20 text-s rounded-3xl bg- flex flex-col w-full max-w-screen-xl mx-auto px-6 xl:px-0">
      <AppHeading2 text={title} />
      <AppHeadingDescription text={description} />
      <Tabs defaultValue="all" className="mt-10 gap-6 rounded-xl flex flex-row">
        <TabsList className="mx-auto h-fit p-2 w-fit flex-col">
          <TabsTrigger className={TriggerclassName} value="all">
            <FaStarOfLife className="me-2 h-4 w-4" />
            All
          </TabsTrigger>
          <TabsTrigger className={TriggerclassName} value="design">
            <PenIcon className="me-2 h-4 w-4" />
            Design
          </TabsTrigger>
          <TabsTrigger className={TriggerclassName} value="backend">
            <Database className="me-2 h-4 w-4" />
            Backend
          </TabsTrigger>
          <TabsTrigger className={TriggerclassName} value="frontend">
            <PcCase className="me-2 h-4 w-4" />
            Frontend
          </TabsTrigger>
          <TabsTrigger className={TriggerclassName} value="other">
            <PcCase className="me-2 h-4 w-4" />
            Tools
          </TabsTrigger>
        </TabsList>
        <div className="w-full ">
          <TabsContent value="design">
            <div className="flex gap-4 flex-wrap justify-start">
              {designs &&
                designs.map(({tech,i}:{tech:Skill,i: number}) => (<TechComponent key={i} data={tech}/>))}
            </div>
          </TabsContent>
          <TabsContent value="backend">
            <div className="flex gap-4 flex-wrap justify-start">
              {backends &&
                backends.map((tech,i) => (<TechComponent key={i} data={tech}/>))}
            </div>
          </TabsContent>
          <TabsContent value="frontend">
            <div className="flex gap-4 flex-wrap justify-start">
              {frontends &&
                frontends.map((tech,i) => (<TechComponent key={i} data={tech}/>))}
            </div>
            {/* {<pre>{JSON.stringify(technologies, null, 2)}</pre>} */}
          </TabsContent>
          <TabsContent value="other">
            <div className="flex gap-4 flex-wrap justify-start">
              {otherTools &&
                otherTools.map((tech,i) => (<TechComponent key={i} data={tech}/>))}
            </div>
            {/* {<pre>{JSON.stringify(technologies, null, 2)}</pre>} */}
          </TabsContent>
           <TabsContent value="all">
            <div className="flex gap-4 flex-wrap justify-start">
              {technologies &&
                technologies.map((tech,i) => (<TechComponent key={i} data={tech}/>))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default SkillsSection;


const  TechComponent = ({data}:{data: Skill})=>{
    return (
        <div className="bg-background rounded-lg px-4 py-2 border flex items-center gap-2">
                      {data.icon && (
                        <div className="bg- rounded-full bg-white p-2 relative">
                            <Image
                                fill
                                src={data.icon}
                                alt={data.name}
                                className="w-6 h-6"
                            />
                        </div>
                      )}
                      <span className="font-medium text-forground">
                        {data.name}
                      </span>
                    </div>
    )
}