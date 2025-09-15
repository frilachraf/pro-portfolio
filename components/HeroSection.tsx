import Hero06 from "./hero-06/hero-06";
import { CgMouse } from "react-icons/cg";
import { createClient } from "@/lib/supabase/server";

// Type your profile row (replace with Supabase-generated type if available)
interface Profile {
  id: string;
  title?: string;
  headline?: string;
  subline?: string;
}

const HeroSection = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("id", process.env.NEXT_PUBLIC_SUPABASE_CLIENT_USER_ID)
    .limit(1)
    .single(); // cleaner than `.limit(1)[0]`

  if (error) {
    console.error("Error loading profile:", error.message);
    return null;
  }

  const profile = data as Profile;

  return (
    <section className="relative max-h-screen" id="about">
      {profile && (
        <Hero06
          title={profile.title}
          headline={profile.headline}
          description={profile.subline}
        />
      )}
      <div className="absolute bottom-0 w-full left-0 right-0 flex items-center justify-center">
        <CgMouse className="-translate-y-10 text-3xl sm:text-4xl animate-bounce text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
