import { supabase } from "@/lib/supabase/client";

export async function downloadFile(path: string) {
  const { data, error } = await supabase.storage
    .from("documents")
    .download(path);

  if (error) {
    console.error("Error downloading file:", error.message);
    return null;
  }

  // Create a download link for the browser
  const url = URL.createObjectURL(data);
  const a = document.createElement("a");
  a.href = url;
  a.download = path.split("/").pop() || "file"; // default filename
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  console.log('file downloaded', path)

  return true;
}
