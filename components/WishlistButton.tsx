import { addToWishlist, deleteFromWishlist } from '@/utils/actions/wishlist'
import { checkIfMovieIsInWishlist } from '@/utils/supabase/helpers/wishlist'
import Icon from './Icons'
import { SubmitButton } from './SubmitButton'

export default async function WishlistButton({ movie_id }: { movie_id: number }) {
  const isInWishlist = await checkIfMovieIsInWishlist(movie_id)

  return (
    <form>
      <input type="hidden" name="movie_id" value={movie_id} />

      {/* TODO: Add type dynamically for tv shows */}
      <input type="hidden" name="type" value='movie' />

      <SubmitButton
        formAction={isInWishlist ? deleteFromWishlist : addToWishlist}
        className="font-semibold flex gap-2 items-center border border-lime-500 rounded px-6 py-2 leading-normal text-lime-500 transition duration-150 ease-in-out hover:bg-lime-600/5 hover:shadow-light-2 focus:bg-lime-600/5 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-lime-600/5 active:shadow-light-2 motion-reduce:transition-none"
        pendingText={isInWishlist ? 'Removing from wishlist...' : 'Adding to wishlist...'}
        >
        <Icon
          className={`me-1 h-4 w-4 ${isInWishlist && 'rotate-45'} text-lime-500`}
          name='cross'
          height='20'
          width='20'
        />
        {isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
      </SubmitButton>
    </form>
  )
}