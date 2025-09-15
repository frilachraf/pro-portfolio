'use client";'
import { Calendar } from "lucide-react";
import ExperienceTimlineAnimation from "../animations/experience-timeline-animation";


interface ExperienceDataProps{
  company?:string;
  title?:string;
  started_at?:string;
  end_at?:string;
  description?:string;
}
interface ExperiencesTimelineProps {
  data?: ExperienceDataProps[];
}
export default function AppTimeline4({ data }: ExperiencesTimelineProps) {
  return (
    <div className="mt-12">
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
                <div className="pt-2- sm:pt-1- space-y-3">
                  <p className="text-base sm:text-lg font-semibold align-text-top">{experience?.company}</p>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">{experience?.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
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
