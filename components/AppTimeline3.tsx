import { Button } from "@/components/ui/button";
import { AppCarousel } from "./AppCarousel";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { FaGithub } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";
import Link from "next/link";
import SimpleDisplay from "./animations/simple-display";
import { AppHeading2, AppHeadingDescription } from "./AppHeadings";
import { FaFigma } from "react-icons/fa";

interface Feature {
  image?: string;
  title?: string;
  description?: string;
}
interface Project {
  name: string;
  description: string;
  link: string;
  github: string;
  image?: string;
  date: string;
  project_tools: [];
}

interface Timeline3Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary: {
      text?: string;
      url?: string;
    };
    secondary: {
      text?: string;
      url?: string;
    };
  };
  features?: Feature[];
  data?: Project[];
  profile?: any;
}

const ProjectsTimeline = ({ data , profile}: Timeline3Props) => {
  const content = {
    heading: "What Have I Built?",
    description: "A showcase of work where ideas turned into products people use and love.",
    buttons: {
      primary: {
        text: "Start Now",
        url: "#",
      },
      secondary: {
        text: "Book a demo",
        url: "#",
      },
    },
  };
  return (
    <section className="">
      <div className="">
        <div className="relative grid gap-16 lg:grid-cols-3">
          <div className="top-40 h-fit lg:sticky lg:col-span-1">
            <AppHeading2 text={content.heading}/>
            <AppHeadingDescription text={content.description} />

            <div className="mt-8 flex flex-col gap-4 lg:flex-row">
              {profile?.github && (
                <Link href={profile?.github} target="_blank">
                  <FaGithub className="h-5 w-5" />
                </Link>
              )}
              {profile?.figma && (
                <Link href={profile?.figma} target="_blank">
                  <FaFigma  className="h-5 w-5 font-bold " />
                </Link>
              )}
              {JSON.stringify(profile)}
              
            </div>
          </div>
          <div className="flex flex-col gap-12 lg:gap-20 lg:col-span-2">
            {data &&
              data.map((project: Project, index) => (
                <SimpleDisplay key={index}>
                  <div key={index} className="rounded-xl border p-2">
                  {/* <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-video w-full rounded-xl border border-dashed object-cover"
                /> */}
                  <AppCarousel items={[project?.image]} />
                  <div className="p-6">
                    <h3 className="mb-1 text-2xl font-semibold">
                      {project?.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {project?.description}
                    </p>
                    <div className="flex mt-10 items-center">
                      {project?.project_tools && (
                        <div className="flex flex-row items-center justify-start gap-2 w-full h-full">
                          <AnimatedTooltip items={project?.project_tools} />
                        </div>
                      )}
                      <div className="flex gap-2">
                        
                        <Button disabled={!project.github} size="icon" variant={'outline'} className="border-none- rounded-full aspect-square">
                              <FaGithub />
                         
                        </Button>
                       
                        
                        {project.link && 
                        <Link href={project?.link} target="_blank">
                          <Button disabled={!project.link} size="icon" variant={'outline'} className="border-none- rounded-full aspect-square">
                      
                        <AiOutlineLink />
                        </Button>
                        </Link >
                        }
                        
                      </div>
                    </div>
                  </div>
                </div>
                </SimpleDisplay>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsTimeline;
