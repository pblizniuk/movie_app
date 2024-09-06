'use client'
import Image from 'next/image'
import { MotionDiv } from './MotionDiv'

export default function HeroImage({
  title,
  backdrop_path,
}: {
  title: string
  backdrop_path: string
}) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 1,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      viewport={{ amount: 0 }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
        alt={title}
        width={1280}
        height={1080}
        quality={100}
        className="h-full w-full object-cover object-top transition-all delay-150 duration-[8000ms] [&.active]:scale-110"
        priority={true}
        onLoad={(e) => (e.currentTarget.className += ' active')}
      />
    </MotionDiv>
  )
}
