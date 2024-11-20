import { createClient } from "@supabase/supabase-js";

// #######################################################
// MODIFY THESE VARIABLES, TO YOUR SUPABASE INSTALLATION.
// #######################################################
const SUPABASE_URL = "https://epgjtuypadrnxeldurle.supabase.co";
const PUBLIC_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwZ2p0dXlwYWRybnhlbGR1cmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1ODUwNDEsImV4cCI6MjA0NzE2MTA0MX0.VuMVwO8Bcq4JPtDXJNDLjUwhEOFL9h1ce06DwlaO6AQ";
// #######################################################

let supabaseClientSingletong = undefined;
export function getSupabaseClient() {
  if (supabaseClientSingletong == undefined) {
    supabaseClientSingletong = createClient(SUPABASE_URL, PUBLIC_ANON_KEY);
  }

  return supabaseClientSingletong;
}
