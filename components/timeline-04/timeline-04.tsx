'use client";'
import { Badge } from "@/components/ui/badge";
import { Building, Building2, Calendar, Store } from "lucide-react";
import ExperienceTimlineAnimation from "../animations/experience-timeline-animation";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    description:
      "Led the development of enterprise-scale web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    icon: Building,
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    period: "2021 - 2023",
    description:
      "Developed and maintained multiple client projects, implemented responsive designs, and integrated third-party APIs for enhanced functionality.",
    technologies: ["React", "Express.js", "PostgreSQL", "Docker", "Redis"],
    icon: Building2,
  },
  {
    title: "Frontend Developer",
    company: "WebTech Studios",
    period: "2018 - 2021",
    description:
      "Created responsive and interactive user interfaces, collaborated with designers, and optimized application performance.",
    technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"],
    icon: Store,
  },
];

interface ExperiencesTimelineProps {
  data?: any[];
}
export default function AppTimeline4({ data }: ExperiencesTimelineProps) {
  return (
    <div className="">
      <div className="relative ml-4">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-2" />

        {data && data.map(
          (
            experience,
            index
          ) => (
            
            <div key={index} className="relative pl-10 pb-12 last:pb-0">
                {/* Timeline Icon */}
                <div className="absolute left-px -translate-x-1/2 h-3 w-3 flex items-center justify-center rounded-full bg-primary ring-8-ring-background border-2 border-background">
                  {/* <Icon className="h-5 w-5" /> */}
                </div>

                {/* Content */}

                <ExperienceTimlineAnimation delay={index*0.5}>
                <div className="pt-2 sm:pt-1 space-y-3">
                  <p className="text-base sm:text-lg font-semibold">{experience?.company}</p>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">{experience?.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{experience?.started_at} - {experience?.end_at}</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {experience?.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {/* {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full"
                    >
                    {tech}
                    </Badge>
                  ))} */}
                  </div>
                </div>
              </ExperienceTimlineAnimation>
              </div>
          )
        )}
      </div>
    </div>
  );
}
