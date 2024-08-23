const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-stone-700/60 before:to-transparent';

export function ReelSkeleton() {
  return (
    <div
      className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 min-h-48 gap-2'
    >
      <div className={`${shimmer} h-[300px] w-full bg-stone-800 relative rounded-md mr-2`} />
      <div className={`${shimmer} h-[300px] w-full bg-stone-800 relative rounded-md mr-2`} />
      <div className={`${shimmer} h-[300px] w-full bg-stone-800 relative rounded-md mr-2 hidden md:block`} />
      <div className={`${shimmer} h-[300px] w-full bg-stone-800 relative rounded-md mr-2 hidden md:block`} />
      <div className={`${shimmer} h-[300px] w-full bg-stone-800 relative rounded-md mr-2 hidden xl:block`} />
      <div className={`${shimmer} h-[300px] w-full bg-stone-800 relative rounded-md mr-2 hidden xl:block`} />
      <div className={`${shimmer} h-[300px] w-full bg-stone-800 relative rounded-md mr-2 hidden 2xl:block`} />
      <div className={`${shimmer} h-[300px] w-full bg-stone-800 relative rounded-md mr-2 hidden 2xl:block`} />
    </div>
  );
}

export function TileSkeleton() {
  return (
    <div className={`${shimmer} h-[300px] w-full bg-stone-800 relative rounded-md mr-2`} />
  );
}