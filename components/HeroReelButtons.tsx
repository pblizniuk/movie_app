import Link from 'next/link'

type Props = {
  id: number
  children?: React.ReactNode
}

export default function HeroReelButtons({ children, id }: Props) {
  return (
    <div className="mb-4 flex gap-4">
      <Link
        href={`/movies/${id}`}
        type="button"
        className="shadow-light-3 hover:shadow-light-2 focus:shadow-light-2 active:shadow-light-2 inline-block rounded bg-lime-500 px-6 py-2 font-semibold leading-normal text-white transition duration-150 ease-in-out hover:bg-lime-600 focus:bg-lime-600 focus:outline-none focus:ring-0 active:bg-lime-600 motion-reduce:transition-none"
      >
        View Details
      </Link>
      {children}
    </div>
  )
}
