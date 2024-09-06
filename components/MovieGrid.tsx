import MovieTile from './MovieTile'
import { MovieGridTypes } from '@/utils/types'
import LoadMore from './LoadMore'

export default async function MovieGrid({
  title,
  data,
  isTV = false,
  pagingUrl = '',
}: MovieGridTypes) {
  return (
    <div>
      <h3 className="mb-12 text-5xl font-semibold lg:mb-20">{title}</h3>
      <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {data.map((item: { id: number; poster_path: string }, index) => {
          if (!item?.poster_path) return
          return (
            <MovieTile
              key={item?.id}
              item={item}
              width={375}
              height={582}
              isTV={isTV}
              index={index}
            />
          )
        })}
        <LoadMore pagingUrl={pagingUrl} isTV={isTV} />
      </div>
    </div>
  )
}
