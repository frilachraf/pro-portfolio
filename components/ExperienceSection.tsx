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

export function ExperienceSection({experiences}: {experiences: any[]}) {
  return (
    <div className="mx-10">
        <AppTimeline4 />
    </div>
  );
}
export default ExperienceSection;