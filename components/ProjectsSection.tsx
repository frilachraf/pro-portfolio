import { createClient } from "@/lib/supabase/server";
import ProjectsTimeline from "./AppTimeline3";

const ProjectsSection = async () => {
  const supabase = await createClient();

  const { data: projects, error } = await supabase
    .from("projects")
    .select("*, project_tools(*, tool:technologies(*))")
    .eq("profile_id", process.env.NEXT_PUBLIC_SUPABASE_CLIENT_USER_ID)
    .order("end_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error.message);
    return <div className="text-red-500">Failed to load projects</div>;
  }

  return (
    <section
      className="w-full max-w-screen-xl mx-auto px-6 xl:px-0"
      id="projects"
    >
      {projects && <ProjectsTimeline data={projects} />}

      <div className="flex flex-row items-center justify-center mb-10 w-full">
        {/* Extra content here if needed */}
      </div>
    </section>
  );
};

export default ProjectsSection;
