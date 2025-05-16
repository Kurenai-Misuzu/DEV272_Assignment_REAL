import { createClient } from '@supabase/supabase-js'

// api key in .env
export let supabaseURL: string;
export let supabaseKEY: string;

export const supabase = () => {
    if (process.env.EXPO_PUBLIC_SUPABASE_URL){
        supabaseURL = process.env.EXPO_PUBLIC_SUPABASE_URL;
    } else {
        throw new Error ('No supabase URL');
    }
    if (process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY){
        supabaseKEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
    } else {
        throw new Error ('No supabase Key');
    }

    return createClient(supabaseURL, supabaseKEY);
}