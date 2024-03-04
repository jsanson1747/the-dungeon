import supabase from "@/supabase/client";

export async function GET() {
  const { data, error } = await supabase.from("users").select("*");

  return Response.json({ data: data });
}
