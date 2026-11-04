import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  (typeof import.meta !== "undefined" ? import.meta.env?.["VITE_SUPABASE_URL"] : undefined) || "";
const supabaseAnonKey =
  (typeof import.meta !== "undefined" ? import.meta.env?.["VITE_SUPABASE_ANON_KEY"] : undefined) || "";

export const isSupabaseConfigured = () =>
  Boolean(supabaseUrl && supabaseAnonKey && !supabaseUrl.includes("seu-projeto") && !supabaseAnonKey.includes("sua-chave"));

export const supabase = createClient(
  supabaseUrl || "https://seu-projeto.supabase.co",
  supabaseAnonKey || "sua-chave-anon-do-supabase",
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
);

export function getSupabaseClient() {
  return supabase;
}
