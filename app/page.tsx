import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Button } from "flowbite-react";
import { AppCarousel } from "@/components/AppCarousel";
import Hero47 from "@/components/MobileAppSection";
import DefaultLayout from "@/components/layouts/defaultLayout";
import ContactSection from "@/components/ContactSection";
import { useTranslations } from "next-intl";
import TestComponent from "@/components/TestComponent";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <DefaultLayout >
      <HeroSection />
      <ExperienceSection experiences={[]} title="Experiences" />
      <ProjectsSection projects={[]} />
      <SkillsSection skills={[]} title="What Tools I use" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto consectetur repellat ipsum, doloribus expedita architecto!" />
      <div id="contact">
        <ContactSection />
      </div>
      <TestComponent />
    </DefaultLayout>
  );
}
