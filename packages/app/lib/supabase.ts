import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://smjvcizkaxscoqgignso.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtanZjaXprYXhzY29xZ2lnbnNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA5NDI1MjYsImV4cCI6MTk2NjUxODUyNn0.FxGV0933y8j5Wca4sQlBWeSLlTczvCLc-5lYBzR_wU8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
