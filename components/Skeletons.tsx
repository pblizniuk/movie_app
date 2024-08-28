const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-stone-700/60 before:to-transparent'

export function ReelSkeleton() {
  return (
    <div className="mr-3 grid min-h-48 grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
      <div
        className={`${shimmer} relative h-[260px] w-full overflow-hidden rounded-md bg-stone-800`}
      />
      <div
        className={`${shimmer} relative h-[260px] w-full overflow-hidden rounded-md bg-stone-800`}
      />
      <div
        className={`${shimmer} relative hidden h-[260px] w-full overflow-hidden rounded-md bg-stone-800 md:block`}
      />
      <div
        className={`${shimmer} relative hidden h-[260px] w-full overflow-hidden rounded-md bg-stone-800 md:block`}
      />
      <div
        className={`${shimmer} relative hidden h-[260px] w-full overflow-hidden rounded-md bg-stone-800 xl:block`}
      />
      <div
        className={`${shimmer} relative hidden h-[260px] w-full overflow-hidden rounded-md bg-stone-800 xl:block`}
      />
      <div
        className={`${shimmer} relative hidden h-[260px] w-full overflow-hidden rounded-md bg-stone-800 2xl:block`}
      />
      <div
        className={`${shimmer} relative hidden h-[260px] w-full overflow-hidden rounded-md bg-stone-800 2xl:block`}
      />
    </div>
  )
}

export function TileSkeleton() {
  return (
    <div
      className={`${shimmer} relative h-[260px] w-full overflow-hidden rounded-md bg-stone-800`}
    />
  )
}
