import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || "https://qwqvzggmujmuydlqqkwa.supabase.co"
const supabaseKey = process.env.SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3cXZ6Z2dtdWptdXlkbHFxa3dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxNDk1MTIsImV4cCI6MjAxNDcyNTUxMn0.FOQxmxy14LRRE7zHUDgM3ag7zBBTsJhqZEF7z0nVPVs"

const supabase = createClient(supabaseUrl, supabaseKey)

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession()
  return { data, error }
}

export const getUser = async () => {
  const {
    data: { user }
  } = await supabase.auth.getUser()
  return user
}

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })
  return { data, error }
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })
  return { data, error }
}

export const signInWithGithub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github'
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export default supabase