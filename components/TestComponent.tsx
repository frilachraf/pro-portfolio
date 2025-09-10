import { createClient } from "@/lib/supabase/server";

export default async function TestComponent() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("experiences").select();

  return <pre>{JSON.stringify(instruments, null, 2)}</pre>
}