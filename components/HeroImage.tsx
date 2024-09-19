'use client'
import Image from 'next/image'
import { MotionDiv } from './MotionDiv'

export default function HeroImage({
  title,
  backdrop_path,
  deferred = false,
  animated = false,
}: {
  title: string
  backdrop_path: string
  deferred?: boolean
  animated?: boolean
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
        delay: deferred ? 0.5 : 0,
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
        className="h-full w-full min-w-[100vw] scale-110 object-cover object-top transition-transform delay-150 duration-[8000ms] [&.active]:scale-100"
        priority={true}
        onLoad={(e) =>
          animated ? (e.currentTarget.className += ' active') : null
        }
      />
    </MotionDiv>
  )
}
