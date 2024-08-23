import AuthButton from "@/components/AuthButton";
import Link from "next/link";
import Icon from "./Icons";
import DialogTrigger from "./DialogTrigger";

export default function Nav() {
  return (
    <>
      <div className="w-full z-50 py-2 -mb-[56px] sticky top-0 bg-stone-900/70 backdrop-blur-md">
        <div className="max-w-[2000px] mx-auto px-3 grid grid-cols-[auto_1fr_auto] content-center justify-center align-middle">
          <Link href="/" className="mr-10 mt-1"><div className='font-rock-salt logo text-xl font-extrabold text-lime-500'>Screen<span className="text-foreground/80">Bits</span></div></Link>
          <nav className="flex py-2 px-3 gap-5 font-semibold">
            <span className='group relative'>
              <span className='flex items-center'>
                <Icon
                  name='movies'
                  height='20'
                  width='auto'
                  className=' fill-white'
                />
                <span className="ml-1 hidden lg:block">Movies</span>
              </span>
              <div className="absolute hidden group-hover:block bg-stone-600/90 rounded-md py-2 px-3 text-foreground/80">
                <div className="grid grid-rows-3 gap-2 min-w-48">
                  <Link href="/movies/popular">Popular Movies</Link>
                  <Link href="/movies/top-rated">Top Rated</Link>
                  <Link href="/movies/now-in-theaters">Now in Theaters</Link>
                  <Link href="/movies/coming-soon">Coming Soon</Link>
                </div>
              </div>
            </span>
            {/* TODO: TV shows aren't yet completed, need to dynamically set type */}
            {/* <span className='group relative'>
              <span className='flex items-center'>
                <Icon
                  name='tv_shows'
                  height='20'
                  width='auto'
                  color='white'
                />
                <span className="ml-1 hidden lg:block whitespace-nowrap">TV Shows</span>
              </span>
              <div className="absolute hidden group-hover:block bg-stone-600/90 rounded-md py-2 px-3 text-foreground/80">
                <div className="grid grid-rows-2 gap-2 min-w-28">
                  <Link href="/tv-shows/popular">Popular</Link>
                  <Link href="/tv-shows/top-rated">Top Rated</Link>
                </div>
              </div>
            </span> */}
            <Link href="/wishlist">
              <span className='flex items-center'>
                <Icon
                  name='wishlist'
                  height='20'
                  width='auto'
                  className=' fill-white'
                />
                <span className="ml-1 hidden lg:block whitespace-nowrap">Wishlist</span>
              </span></Link>
          </nav>
          <div>
            <AuthButton />
            {/* <DialogTrigger /> */}
          </div>
        </div>
      </div>
    </>
  );
}