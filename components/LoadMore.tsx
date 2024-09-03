'use client'
import { useInView } from 'react-intersection-observer'

import React, { useState, useEffect } from 'react'
import MovieTile from './MovieTile'
import getData from '@/utils/get_data'
import Icon from '@/components/Icons'
import { MovieTileProps } from '@/utils/types'

export default function LoadMore({
  pagingUrl,
  isTV = false,
}: {
  pagingUrl: string
  isTV?: boolean
}) {
  // const [data, setData] = useState({ results: [] })
  const [data, setData] = useState<MovieTileProps[]>([])
  const [pageNumber, setPageNumber] = useState(2) // always start from 2
  const [loading, setLoading] = useState(false)

  // const handleOnClick = async () => {
  //   const { results, page } = await getData(`${pagingUrl}${pageNumber}`)
  //   console.log(page, results?.length, data?.results?.length)
  //   setData(response)
  //   // eslint-disable-next-line no-unsafe-optional-chaining
  //   setResults([...data?.results, ...results])
  //   setPageNumber(response?.page + 1)
  // }

  const { ref, inView } = useInView({
    delay: 50,
  })

  useEffect(() => {
    if (inView) {
      setLoading(true)
      getData(`${pagingUrl}${pageNumber}`).then(({ results, page }) => {
        setPageNumber(page + 1)
        setData([...data, ...results])
        setLoading(false)
      })
    }
  }, [inView])

  return (
    <>
      {data?.map((item, index) => {
        if (!item?.poster_path) return
        return (
          <MovieTile
            key={`${item?.id}-${index}`}
            item={item}
            width={375}
            height={582}
            isTV={isTV}
            index={index}
          />
        )
      })}
      <div className="flex w-full" ref={ref}>
        {loading && (
          <Icon
            name="spinner"
            className="m-auto h-12 w-12 animate-spin text-lime-500"
            size="50px"
          />
        )}
      </div>
    </>
  )
}
