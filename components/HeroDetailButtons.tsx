
import WishlistButton from './WishlistButton'
import WatchTrailerButton from './WatchTrailerButton';

export default function HeroDetailButtons({ id, trailerKey }: { id: number, trailerKey: string }) {
  return (
    <>
      <div className="mb-4 flex gap-4">
        <WatchTrailerButton movie_id={id} trailerKey={trailerKey} />
        <WishlistButton movie_id={id} />
      </div>
    </>
  )
}