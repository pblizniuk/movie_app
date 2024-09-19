'use client'
import { useState, useEffect } from 'react'
import getData from '@/utils/get_data'
import Link from 'next/link'
import { useRef } from 'react'
import Image from 'next/image'

export default function SearchResultsDropdown({ query }: { query: string }) {
  const [searchResults, setSearchResults] = useState({ results: [] })
  const dropdown = useRef(null)

  useEffect(() => {
    const handleResults = async () => {
      const data = await getData(
        `search/multi?include_video=false&page=1&query=${query}&sort_by=popularity.desc`,
      )

      setSearchResults(data)
    }
    handleResults()
  }, [query, dropdown])

  if (!query || !searchResults) return null

  return (
    <div
      ref={dropdown}
      className="results absolute right-0 max-h-[80vh] min-w-[300px] overflow-y-scroll rounded-md bg-stone-800 p-5 lg:min-w-[500px]"
    >
      {searchResults?.results?.map(
        (result: {
          media_type: string
          name: string
          title: string
          id: number
          poster_path: string
        }) => {
          const { media_type, name, title, id } = result
          return (
            <span key={id}>
              <Link
                href={`/${media_type === 'movie' ? 'movies' : 'tv-shows'}/${id}`}
                key={id}
                className="mb-2 flex items-center gap-2 rounded-md p-1 hover:bg-stone-900"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w300${result.poster_path}`}
                  alt={title}
                  width={50}
                  height={50}
                />
                <div>
                  <h3 className="text-xl font-normal">{title || name}</h3>
                  <p className="text-gray-400">
                    {media_type === 'movie' ? 'Movie' : 'TV Show'}
                  </p>
                </div>
              </Link>

              <div className="my-2 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
            </span>
          )
        },
      )}
    </div>
  )
}
