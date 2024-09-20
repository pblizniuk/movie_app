'use client'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Auth from '@/components/Auth'
import { MotionDiv } from '@/components/MotionDiv'

export default function LoginModal({
  searchParams,
}: {
  searchParams: { message: string; loggedIn: string }
}) {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const { loggedIn } = searchParams

  useEffect(() => {
    dialogRef.current?.showModal()
    document.body.classList.add('overflow-hidden')

    if (loggedIn === 'true') {
      dialogRef.current?.close()
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [loggedIn])

  const handleClose = () => {
    router.back()
  }

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <>
      <MotionDiv
        onClick={() => handleClose()}
        variants={bgVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        viewport={{ amount: 0 }}
        className="absolute inset-0 z-[998] flex h-full min-h-[100vh] w-full min-w-[100vw] items-center justify-center overflow-y-auto bg-stone-900/90"
      />
      <dialog
        ref={dialogRef}
        onClose={() => handleClose()}
        className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-[999] m-auto flex h-[100vh] w-full max-w-[600px] flex-col overflow-y-auto bg-stone-900 p-3 md:w-[80vw] lg:p-24"
      >
        <button
          onClick={() => handleClose()}
          className="fixed right-3 top-2 z-[999] p-3 text-6xl text-lime-500"
        >
          &times;
        </button>
        <h3 className="mb-4 block px-6 py-10 text-3xl font-semibold text-white">
          Welcome! Sign in or create your free account.
        </h3>
        <Auth
          // onHandleSubmit={handleSubmit}
          // isDialog
          searchParams={searchParams}
        />
      </dialog>
    </>
  )
}
