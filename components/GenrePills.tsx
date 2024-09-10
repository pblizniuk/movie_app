import getData from '@/utils/get_data'
import Link from 'next/link'

const GenrePills = async () => {
  const { genres } = await getData('genre/movie/list')

  if (!genres) return

  return (
    <>
      <h3 className="mb-6 text-3xl font-bold">Browse By Genre</h3>
      <div className="flex flex-wrap gap-4">
        {genres?.map((genre: { id: number; name: string }) => (
          <Link
            className="rounded bg-white/80 px-4 py-2 text-lg font-semibold text-stone-900 shadow-sm hover:bg-white/100"
            key={genre.id}
            href={`/movies/genre/${genre.id}`}
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </>
  )
}

export default GenrePills
