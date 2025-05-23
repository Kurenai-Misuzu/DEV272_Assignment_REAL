import { createClient } from "@supabase/supabase-js";

// api key in .env
let supabaseURL: string;
let supabaseKEY: string;

export const checkEnv = () => {};
// typechecking keys
if (process.env.EXPO_PUBLIC_SUPABASE_URL) {
  supabaseURL = process.env.EXPO_PUBLIC_SUPABASE_URL;
} else {
  throw new Error("No supabase URL");
}
if (process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY) {
  supabaseKEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
} else {
  throw new Error("No supabase Key");
}

// create client
export const supabase = createClient(supabaseURL, supabaseKEY);
