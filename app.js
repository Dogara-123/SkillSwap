// 1. Initialize Supabase correctly
// Make sure the URL does NOT have a capital 'L' at the end
const supabaseUrl = 'https://vnsbpedtrrlvbrcmuiez.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuc2JwZWR0cnJsdmJyY211aWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NTA3NDEsImV4cCI6MjA5MDAyNjc0MX0.WnYh--8VoGhWrM4PLi2IELmVUSbJ24z6n9UK5TXM34Y';

// We use '_supabase' to avoid clashing with the global 'supabase' library object
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);
// Get elements