
import { AppHeading2, AppHeadingDescription } from "./AppHeadings";
import AppTimeline4 from "./timeline-04/timeline-04";
import { supabase } from "@/lib/supabase/client";


interface ExperienceSectionProps {
  title?: string
  description?: string;
}
export async function ExperienceSection({
  title = "Where Have I Made an Impact Before You?",
  description = "Brands, startups, and teams I’ve helped grow through design and development." }: ExperienceSectionProps) {

  const { data: posts, error } = await supabase.from('experiences').select();

  if (error || !posts) {
    return <p>Failed to load posts.</p>;
  }

  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }
  return (
    <section id="experiences" className="w-full max-w-screen-xl mx-auto px-6 xl:px-0 min-h-screen py-10">
      <AppHeading2 text={title} />
      <AppHeadingDescription text={description} />

      <AppTimeline4 data={posts} />
    </section>
  );
}
export default ExperienceSection;



