import dynamic from 'next/dynamic'
import AuthButton from '@/components/AuthButton'
import Link from 'next/link'
import Icon from './Icons'
// import Search from './Search'

const Search = dynamic(() => import('./Search'), { ssr: false })

export default function Nav() {
  return (
    <>
      <div className="sticky top-0 z-50 -mb-[56px] w-full bg-stone-900/70 py-2 backdrop-blur-md">
        <div className="mx-auto grid max-w-[2000px] grid-cols-[auto_1fr_auto] content-center justify-center px-3 align-middle">
          <Link href="/" className="mr-4 mt-1 md:mr-10">
            <div className="logo font-rock-salt text-xl font-extrabold text-lime-500">
              Screen<span className="text-foreground/80">Bits</span>
            </div>
          </Link>
          <nav className="flex gap-5 px-3 py-2 font-semibold">
            <span className="group relative">
              <span className="flex items-center">
                <Icon name="movies" size="20" className="fill-white" />
                <span className="ml-1 hidden lg:block">Movies</span>
              </span>
              <div className="absolute hidden rounded-md bg-stone-600/90 px-3 py-2 text-foreground/80 group-hover:block">
                <div className="grid min-w-48 grid-rows-3 gap-2">
                  <Link href="/movies/showcase">All Movies</Link>
                  <Link href="/movies/popular">Popular Movies</Link>
                  <Link href="/movies/top-rated">Top Rated</Link>
                  <Link href="/movies/now-in-theaters">Now in Theaters</Link>
                  <Link href="/movies/coming-soon">Coming Soon</Link>
                </div>
              </div>
            </span>
            <span className="group relative">
              <span className="flex items-center">
                <Icon name="tv_shows" size="20" color="white" />
                <span className="ml-1 hidden whitespace-nowrap lg:block">
                  TV Shows
                </span>
              </span>
              <div className="absolute hidden rounded-md bg-stone-600/90 px-3 py-2 text-foreground/80 group-hover:block">
                <div className="grid min-w-28 grid-rows-2 gap-2">
                  <Link href="/tv-shows/popular">Popular</Link>
                  <Link href="/tv-shows/top-rated">Top Rated</Link>
                </div>
              </div>
            </span>
            <Link href="/wishlist">
              <span className="flex items-center">
                <Icon name="wishlist" size="20" className="fill-white" />
                <span className="ml-1 hidden whitespace-nowrap lg:block">
                  Wishlist
                </span>
              </span>
            </Link>
          </nav>
          <div className="flex items-center gap-10">
            <Search showDropdown />
            <AuthButton />
          </div>
        </div>
      </div>
    </>
  )
}
