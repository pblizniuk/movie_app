'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import SearchResultsDropdown from './SearchResultsDropdown'
import { Suspense, useEffect, useRef, useState } from 'react'

export default function Search({
  showDropdown = false,
}: {
  showDropdown?: boolean
}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const defaultValue = searchParams.get('query')?.toString()

  const ref = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleOutSideClick = (e: MouseEvent) => {
      const params = new URLSearchParams(searchParams)
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false)
        params.delete('query')
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
    <Suspense fallback={null}>
      <div className="relative" ref={ref}>
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
      </div>
    </Suspense>
  )
}
