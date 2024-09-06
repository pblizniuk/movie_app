import WishlistTile from '@/components/WishlistTIle'
import { getWishlistTitles } from '@/utils/supabase/helpers/wishlist'
import { getUser } from '@/utils/supabase/helpers/get_user'
import { deleteFromWishlist } from '@/utils/actions/wishlist'
import Icon from '@/components/Icons'
import { redirect } from 'next/navigation'

type Bundle = { movie_id: number; type: string }[]

export default async function Wishlist() {
  const id = await getUser()

  if (!id) {
    return redirect('/login')
  }

  const wishlist = await getWishlistTitles()

  const movies = wishlist?.data?.filter(
    (item: { type: string }) => item.type === 'movie',
  )
  const tv_shows = wishlist?.data?.filter(
    (item: { type: string }) => item.type === 'tv_show',
  )

  const wishlistBundle = (bundle: Bundle) => {
    return (
      <>
        <div className="xs:grid-cols-3 grid grid-cols-2 gap-y-6 md:grid-cols-4 lg:grid-cols-8">
          {bundle?.map((movie: { movie_id: number; type: string }, index) => {
            const { movie_id, type } = movie

            return (
              <form key={movie_id} className="relative">
                <WishlistTile
                  key={movie_id}
                  movie_id={movie_id}
                  type={type}
                  index={index}
                />
                <input type="hidden" name="movie_id" value={movie_id} />
                <input type="hidden" name="user_id" value={id} />
                <button type="submit" formAction={deleteFromWishlist}>
                  <span className="absolute -top-3 right-1">
                    <span className="block rounded-full bg-lime-500 px-1 py-1 transition-colors hover:bg-lime-600">
                      <Icon
                        className="h-6 w-6 rotate-45 text-white"
                        name="cross"
                        size="30"
                      />
                    </span>
                  </span>
                </button>
              </form>
            )
          })}
        </div>
      </>
    )
  }

  return (
    <main className="mx-auto mt-36 w-full max-w-[2000px] px-6">
      <h3 className="mb-4 text-5xl font-semibold">Your Wishlist</h3>
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
      <h4 className="mb-12 text-3xl font-semibold">Movies</h4>
      {movies && wishlistBundle(movies)}
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
      <h4 className="mb-12 text-3xl font-semibold">TV Shows</h4>
      {tv_shows && wishlistBundle(tv_shows)}
    </main>
  )
}
