'use server'
import { createClient } from "@/utils/supabase/server";
import { getUser } from "@/utils/supabase/helpers/get_user";

export async function getWishlistTitles() {

  const id = await getUser()
  if(!id) {
    return null
  }

  const supabase = createClient();
  const { data, error } = await supabase
    .from('wishlist')
    .select()
    .eq('user_id', id)

  if (error) {
    console.log(error)
    throw new Error(error.message)
  }

  return {
    data,
    error
  }
}

export async function checkIfMovieIsInWishlist(movie_id: number) {
  const data = await getWishlistTitles()

  if(!data) {
    return false
  }
  const wishlistTitles = await getWishlistTitles()
  const isInWishlist = wishlistTitles?.data?.some((movie) => movie.movie_id === movie_id)
  return isInWishlist

}
