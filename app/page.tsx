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


export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExperienceSection experiences={[]} />
      <ProjectsSection projects={[]}/>
      <SkillsSection skills={[]}/>
      <Button>Flowbite button</Button>
      <Hero47 />
      <AppCarousel items={['1', "2"]}/>
    </main>
  );
}
