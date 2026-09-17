// --- ThesisMatrix Supabase Connection Bridge ---

const SUPABASE_URL = 'https://hmmxjjiojxbjsydiubvi.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_tsUWR71lFofVoYTYNDppDg_r_fMsMr1';

// Supabase client initialize karna
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

console.log("ThesisMatrix connected to Supabase successfully! 🚀");