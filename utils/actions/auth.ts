'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

export const signIn = async (formData: FormData) => {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return redirect('/login?message=Could not authenticate user')
  }
  revalidatePath('/login')
  return redirect('/login?loggedIn=true')
}

export const signUp = async (formData: FormData) => {
  const origin = headers().get('origin')
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const supabase = createClient()

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    return redirect('/login?message=Could not authenticate user')
  }

  return redirect('/login?message=Check email to continue sign in process')
}

export const signOut = async () => {
  const supabase = createClient()
  await supabase.auth.signOut()
  return redirect('/')
}
