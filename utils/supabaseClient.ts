import { createClient } from '@supabase/supabase-js';

const supabaseUrl = useRuntimeConfig().public.supabaseUrl as string;
const supabaseKey = useRuntimeConfig().public.supabase.key as string;

export const supabaseClient = createClient(
  supabaseUrl,
  supabaseKey
);
