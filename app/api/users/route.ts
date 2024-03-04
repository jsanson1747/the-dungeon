import supabase from "@/supabase/client";

export async function GET() {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("username", "Admin")
    .limit(1)
    .single();

  return Response.json({ data: data });
}
