const { createClient } = require('@supabase/supabase-js');

// Get Supabase credentials from environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Create and export the Supabase client instance
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
