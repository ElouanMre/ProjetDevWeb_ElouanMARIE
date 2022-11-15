import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tojnbtkjrogrxgzhdjdu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvam5idGtqcm9ncnhnemhkamR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5MDQxNDgsImV4cCI6MTk4MzQ4MDE0OH0.PKDKI05M9oaWLO6yc0lXY4as6TEfBQ2_wtLtieo6GUk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
