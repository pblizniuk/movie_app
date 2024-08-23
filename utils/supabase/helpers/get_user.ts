'use server'
import { createClient } from '@/utils/supabase/server'

export async function getUser() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { id } = Object(user)

  return id
}
