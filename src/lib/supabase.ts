import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://nxzdoenrrhbrozcqpkqx.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54emRvZW5ycmhicm96Y3Fwa3F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MDk0MDMsImV4cCI6MjA2NzQ4NTQwM30.u9809vQXUFrc7lCvXZnz9opJykVn9gW41b36Y2tyMFg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  read: boolean;
};
