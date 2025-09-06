import React from "react";

import VerticalLeftBorderedTabsDemo from "./tabs-14";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, PcCase, PenIcon } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { FaStarOfLife } from "react-icons/fa6";

interface Skill {
  name: string;
  level: string;
}

interface SkillsSectionProps {
  title?: string;
  description?: string;
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = async ({
  title = "Skills",
  skills,
  description = "",
}) => {
  const TriggerclassName ="p-4 w-full justify-start"
      "w-full justify-center data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-foreground rounded-none px-4 py-2  data-[state=active]:shadow-none text-foreground/50 dark:text-muted-foreground border-b-2 border-transparent data-[state=active]:border-b-primary";
  const supabase = await createClient();

  const { data: technologies } = await supabase.from("technologies").select();
  const frontends = technologies?.filter(
    (tech) => tech.category === "frontend"
  );
  const backends = technologies?.filter((tech) => tech.category === "backend");
  const designs = technologies?.filter((tech) => tech.category === "design");
  const otherTools = technologies?.filter((tech) => !["frontend","backend","design"].includes(tech.category));
  return (
    <section className="px-10 py-20 text-s rounded-3xl bg- flex flex-col w-full max-w-screen-xl mx-auto px-6 xl:px-0">
      <h1 className="mt-4 mb-6 text-4xl font-semibold lg:text-5xl tracking-tight">
        {title}
      </h1>
      <p className="font-medium text-muted-foreground lg:text-xl">{description}</p>
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
                designs.map((tech) => (<TechComponent data={tech}/>))}
            </div>
          </TabsContent>
          <TabsContent value="backend">
            <div className="flex gap-4 flex-wrap justify-start">
              {backends &&
                backends.map((tech) => (<TechComponent data={tech}/>))}
            </div>
          </TabsContent>
          <TabsContent value="frontend">
            <div className="flex gap-4 flex-wrap justify-start">
              {frontends &&
                frontends.map((tech) => (<TechComponent data={tech}/>))}
            </div>
            {/* {<pre>{JSON.stringify(technologies, null, 2)}</pre>} */}
          </TabsContent>
          <TabsContent value="other">
            <div className="flex gap-4 flex-wrap justify-start">
              {otherTools &&
                otherTools.map((tech) => (<TechComponent data={tech}/>))}
            </div>
            {/* {<pre>{JSON.stringify(technologies, null, 2)}</pre>} */}
          </TabsContent>
           <TabsContent value="all">
            <div className="flex gap-4 flex-wrap justify-start">
              {technologies &&
                technologies.map((tech) => (<TechComponent data={tech}/>))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default SkillsSection;


const  TechComponent = ({data}:any)=>{
    return (
        <div className="bg-background rounded-lg px-4 py-3 border flex items-center gap-2">
                      {data.icon && (
                        <div className="bg- rounded-full bg-white p-2">
                            <img
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