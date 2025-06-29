import { createClient } from '@supabase/supabase-js'
import { config, isUsingDemoConfig } from './supabase-config'

// Log configuration status
if (isUsingDemoConfig()) {
  console.warn('🚨 Using demo Supabase configuration - see console for setup instructions')
} else {
  console.log('✅ Using real Supabase configuration')
}

console.log('Supabase URL:', config.url)
console.log('Supabase Key (preview):', config.anonKey.substring(0, 20) + '...')

// Create Supabase client
export const supabase = createClient(config.url, config.anonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined
  }
})

// Test connection
supabase.auth.getSession().then(({ data, error }) => {
  if (error) {
    console.warn('⚠️ Supabase connection test failed:', error.message)
    if (isUsingDemoConfig()) {
      console.log('This is expected with demo credentials. Replace with real credentials to connect.')
    }
  } else {
    console.log('✅ Supabase client initialized successfully')
  }
}).catch(err => {
  console.warn('⚠️ Supabase connection test error:', err.message)
})

// Export config for runtime updates
export { config, updateSupabaseConfig, isUsingDemoConfig } from './supabase-config'