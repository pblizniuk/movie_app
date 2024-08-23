import WishlistTile from '@/components/WishlistTIle'
import { getWishlistTitles } from '@/utils/supabase/helpers/get_wishlist_titles'
import { getUser } from '@/utils/supabase/helpers/get_user'
import { deleteFromWishlist } from '@/utils/actions/wishlist'
import Icon from '@/components/Icons'

type Movie = {
  movie_id: number
}

export default async function ProtectedPage() {
  const id = await getUser()
  const wishlist = await getWishlistTitles()

  return (
    <main className="mx-auto mt-36 w-full max-w-[2000px] px-6">
      <h3 className="mb-4 text-5xl font-semibold">Your Wishlist</h3>
      <div className="xs:grid-cols-3 grid grid-cols-2 gap-y-6 md:grid-cols-4 lg:grid-cols-8">
        {wishlist?.data?.map((movie: Movie) => (
          <form action="" key={movie.movie_id} className="relative">
            <WishlistTile key={movie.movie_id} movie_id={movie.movie_id} />
            <input type="hidden" name="movie_id" value={movie.movie_id} />
            <input type="hidden" name="user_id" value={id} />
            <button type="submit" formAction={deleteFromWishlist}>
              <span className="absolute -top-3 right-1">
                <span className="block rounded-full bg-lime-500 px-1 py-1 transition-colors hover:bg-lime-600">
                  <Icon
                    className="h-6 w-6 rotate-45 text-white"
                    name="cross"
                    height="30"
                    width="30"
                  />
                </span>
              </span>
            </button>
          </form>
        ))}
      </div>
    </main>
  )
}
