import { supabase } from "@/lib/supabase/client";

// fetch project from supabase
const getProjects = async () => {
    const { data: projects } = await supabase.from("projects").select();
    return projects;

}
export {getProjects};