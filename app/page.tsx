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


export default function Home() {
  return (
    <DefaultLayout >
      <HeroSection />
      <ExperienceSection experiences={[]} />
      <ProjectsSection projects={[]} />
      <SkillsSection skills={[]} />
      <Button>Flowbite button</Button>
      <AppCarousel items={['1', "2"]} />
      <Hero47 />

    </DefaultLayout>
  );
}
