import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExperienceSection experiences={[]} />
      <ProjectsSection projects={[]}/>
      <SkillsSection skills={[]}/>

    </main>
  );
}
