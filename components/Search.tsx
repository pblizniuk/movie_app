'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import SearchResultsDropdown from './SearchResultsDropdown'
import { useEffect, useRef, useState } from 'react'

export default function Search({
  showDropdown = false,
}: {
  showDropdown?: boolean
}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const defaultValue = searchParams.get('query')?.toString()
  const ref = useRef<HTMLFormElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(searchParams)

    // clear the search bar if no query
    params?.get('query') === null && ref.current && ref.current.reset()

    const handleOutSideClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        // close the dropdown if clicked outside
        setOpen(false)

        // remove the query param
        params.delete('query')

        // reset the search bar
        if (ref.current) {
          ref.current.reset()
        }
      }
    }

    window.addEventListener('mousedown', handleOutSideClick)

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick)
    }
  }, [ref, searchParams])

  const handleOnChange = (term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
      setOpen(true)
    } else {
      params.delete('query')
      setOpen(false)
    }

    setTimeout(() => {
      replace(`${pathname}?${params.toString()}`)
    }, 300)
  }

  return (
    <form className="relative hidden lg:block" ref={ref}>
      <input
        className="w-full min-w-60 rounded-full border border-white bg-transparent px-4 py-2 placeholder:text-foreground/60 focus:border-lime-200 focus:outline-none"
        type="search"
        onChange={(e) => handleOnChange(e.target.value)}
        defaultValue={defaultValue}
        placeholder="Search..."
      />

      {showDropdown && open && (
        <SearchResultsDropdown query={defaultValue || ''} />
      )}
    </form>
  )
}
