'use client'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Auth from '@/components/Auth'

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

    if (loggedIn === 'true') {
      dialogRef.current?.close()
    }
  }, [loggedIn])

  const handleClose = () => {
    router.back()
  }

  return (
    <>
      <div
        onClick={() => handleClose()}
        className="absolute inset-0 z-[999] flex h-full min-h-[100vh] w-full min-w-[100vw] items-center justify-center overflow-y-auto bg-stone-900/90"
      />
      <dialog
        ref={dialogRef}
        onClose={() => handleClose()}
        className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-[999] m-auto flex h-full w-full flex-col items-center justify-center overflow-y-auto bg-stone-900 p-24 md:min-h-[50vh] md:w-[50vw]"
      >
        <button
          onClick={() => handleClose()}
          className="absolute -top-2 right-0 pr-2 text-6xl text-lime-500"
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
