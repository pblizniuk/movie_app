'use client'
import { useState, useEffect } from 'react'
import getData from '@/utils/get_data'
import Link from 'next/link'
import { useRef } from 'react'

export default function SearchResultsDropdown({ query }: { query: string }) {
  if (!query) return null
  const [searchResults, setSearchResults] = useState(false)

  const dropdown = useRef(null)

  useEffect(() => {
    const handleResults = async () => {
      const data = await getData(
        `search/multi?include_adult=false&include_video=false&language=en-US&page=1&query=${query}&sort_by=popularity.desc`,
      )

      setSearchResults(data)
    }
    handleResults()

    // const handleOutSideClick = (e) => {
    //   if (!dropdown.current?.contains(e.target)) {
    //     setSearchResults(false)
    //   }
    // };

    // window.addEventListener("mousedown", handleOutSideClick);

    // return () => {
    //   window.removeEventListener("mousedown", handleOutSideClick);
    // };

  }, [query, dropdown])

  return (
    <div
      ref={dropdown}
      className="results absolute right-0 max-h-[80vh] min-w-[300px] overflow-y-scroll rounded-md bg-stone-800 p-5 lg:min-w-[500px]"
      >
      {searchResults?.results?.map((result) => {
        const { media_type, name, title, id } = result
        return (
          <span key={id}>
            <Link
              href={`/${media_type === 'movie' ? 'movies' : 'tv-shows'}/${id}`}
              key={id}
              className="mb-2 block rounded-md p-1 hover:bg-stone-900"
            >
              <h3 className="text-xl font-normal">{title || name}</h3>
              <p className="text-gray-400">
                {media_type === 'movie' ? 'Movie' : 'TV Show'}
              </p>
            </Link>

            <div className="my-2 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
          </span>
        )
      })}
    </div>
  )
}
