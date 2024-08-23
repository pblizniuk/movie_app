'use server'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation';

export async function deleteFromWishlist(formData: FormData) {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase
    .from('wishlist')
    .delete()
    .eq('movie_id', formData.get('movie_id') as string)
    .eq('user_id', user?.id)
    if (error) {
      console.log(error)
      throw new Error(error.message)
    }

      return revalidatePath('/wishlist')
}

export async function addToWishlist(formData: FormData) {
  console.log(formData)
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if(!user) {
    return redirect('/login?from=/wishlist')
  }

  if (!formData.has('movie_id')) {
    throw new Error('Missing Movie ID')
  }
  const movie_id = formData.get('movie_id') as string
  const type = formData.get('type') as string

  const { error } = await supabase
    .from('wishlist')
    .insert({ movie_id, user_id: user?.id, type: type })
      if (error) {
        console.log(error)
        throw new Error(error.message)
      }

      return revalidatePath('/wishlist')
}
