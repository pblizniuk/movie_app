'use client'

import React, { useState } from 'react'
import MovieTile from './MovieTile'
import getData from '@/utils/get_data'

export default function LoadMore({
  pagingUrl,
  isTV = false,
}: {
  pagingUrl: string
  isTV?: boolean
}) {
  const [data, setData] = useState({ results: [] })
  const [results, setResults] = useState([])
  const [pageNumber, setPageNumber] = useState(2) // always start from 2

  const handleOnCLick = async () => {
    const response: { results: [] } = await getData(`${pagingUrl}${pageNumber}`)
    setData(response)
    // eslint-disable-next-line no-unsafe-optional-chaining
    setResults([...data?.results, ...response?.results])
    setPageNumber(pageNumber + 1)
  }

  return (
    <>
      {data && (
        <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {results?.map((item: { id: number; poster_path: string }, index) => {
            if (!item?.poster_path) return
            return (
              <MovieTile
                key={`${item?.id}-${index}`}
                item={item}
                width={375}
                height={582}
                isTV={isTV}
              />
            )
          })}
        </div>
      )}
      <div className="mt-10 flex justify-center">
        <button
          type="button"
          className="mx-auto rounded-full bg-white px-4 py-2 text-black hover:bg-lime-200"
          onClick={handleOnCLick}
        >
          Load More
        </button>
      </div>
    </>
  )
}
