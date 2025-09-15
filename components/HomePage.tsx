import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import DefaultLayout from "@/components/layouts/defaultLayout";
import ContactSection from "@/components/ContactSection";
import ScrollProgressBar from "@/components/ScrollBarTrigger";
import { createClient } from "@/lib/supabase/server";

interface Profile {
  id: string;
  title?: string;
  headline?: string;
  subline?: string;
  email?: string;
  github?: string;
  figma?: string;
  discord?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
}

const HomePage = async () => {
  const supabase = await createClient();

  const { data: profile, error } = await supabase
    .from('profiles')
    .select()
    .eq("id", process.env.NEXT_PUBLIC_SUPABASE_CLIENT_USER_ID)
    .single<Profile>();

  if (error) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600">Error Loading Profile</h2>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-600">No Profile Found</h2>
          <p className="text-gray-500">Please check your configuration.</p>
        </div>
      </div>
    );
  }

  return (
    <DefaultLayout>
      <ScrollProgressBar />
      <HeroSection />
      <ExperienceSection  />
      <ProjectsSection />
      <SkillsSection skills={[]} />
      <ContactSection profile={profile} />
    </DefaultLayout>
  );
};

export default HomePage;
