
import AppTimeline4 from "./timeline-04/timeline-04";
import { supabase } from "@/lib/supabase/client";

export async function ExperienceSection({title,experiences}: {experiences: any[], title?: string}) {
  
  const { data: posts, error } = await supabase.from('experiences').select();

  if (error || !posts) {
    return <p>Failed to load posts.</p>;
  }

  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }
  return (
    <section id="experiences" className="w-full max-w-screen-xl mx-auto px-6 xl:px-0 min-h-screen py-10">
        <h2 className="mt-4 mb-10 text-4xl font-semibold lg:text-5xl">
          {title}
        </h2>
        <AppTimeline4 data={posts}/>
    </section>
  );
}
export default ExperienceSection;



const staticData = [
  {
    "id": 2,
    "started_at": "2024-03-01",
    "end_at": "2024-04-01",
    "company": "Fruit of the Loom Inc",
    "city": "Skhirat - Temara",
    "title": "Stagiaire en administraion informatique",
    "description": null,
    "profile_id": 1
  },
  {
    "id": 1,
    "started_at": "2024-09-04",
    "end_at": "2024-11-08",
    "company": "AIDSMO (Organisation arabe pour le développement industriel, la\nnormalisation et les mines ",
    "city": "Rabat",
    "title": "Stagiaire en développement web full stack",
    "description": "",
    "profile_id": 1
  },
  {
    "id": 3,
    "started_at": "2023-12-01",
    "end_at": "2024-02-28",
    "company": "Lycée Collégial Ibn Khaldoun",
    "city": "Berrechid",
    "title": "Assistant de soutien éducatif",
    "description": null,
    "profile_id": 1
  }
]
