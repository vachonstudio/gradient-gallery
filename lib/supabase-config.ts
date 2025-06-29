// Update this file with your real Supabase credentials
export const SUPABASE_CONFIG = {
  url: 'https://your-project-ref.supabase.co', // Your real URL
  anonKey: 'your-real-anon-key', // Your real anon key
  serviceRoleKey: 'your-real-service-role-key' // Your real service role key
}

// For demo/development mode detection
export const isDemoMode = () => {
  return !SUPABASE_CONFIG.url.includes('supabase.co') || 
         SUPABASE_CONFIG.url.includes('demo-project')
}

export default SUPABASE_CONFIG