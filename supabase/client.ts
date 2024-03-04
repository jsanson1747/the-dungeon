import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseURL) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL is undefined");
}

if (!supabaseKey) {
  throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is undefined");
}

const supabase = createClient<Database>(supabaseURL, supabaseKey);

export default supabase;
