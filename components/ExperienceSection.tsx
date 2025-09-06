'use client'
import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import AppTimeline4 from "./timeline-04/timeline-04";

export function ExperienceSection({title,experiences}: {experiences: any[], title?: string}) {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-6 xl:px-0 min-h-screen py-10">
        <h2 className="mt-4 mb-10 text-4xl font-semibold lg:text-5xl">
          {title}
        </h2>
        <AppTimeline4 />
    </section>
  );
}
export default ExperienceSection;