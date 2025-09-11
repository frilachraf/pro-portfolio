import { Button } from "@/components/ui/button";
import { AppCarousel } from "./AppCarousel";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { FaGithub } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";
import Link from "next/link";
import SimpleDisplay from "./animations/simple-display";

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
}

const ProjectsTimeline = ({ data }: Timeline3Props) => {
  const content = {
    heading: "Experience the difference with us",
    description:
      "We believe in creating lasting partnerships with our clients, focusing on long-term success through collaborative innovation and dedicated support.",
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
            <h2 className="mt-4 mb-6 text-4xl font-semibold lg:text-5xl">
              {content.heading}
            </h2>
            <p className="font-medium text-muted-foreground lg:text-xl">
              {content.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 lg:flex-row">
              <Button className="gap-2" size="lg" asChild>
                <a href={content.buttons.primary.url}>
                  {content.buttons.primary.text}
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href={content.buttons.secondary.url}>
                  {content.buttons.secondary.text}
                </a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-12 lg:gap-20 lg:col-span-2">
            {data &&
              data.map((project, index) => (
                <SimpleDisplay >
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
                       
                        
                        <Button disabled={!project.link} size="icon" variant={'outline'} className="border-none- rounded-full aspect-square">
                      
                        <AiOutlineLink />
                        </Button>
                        
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
