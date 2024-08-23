'use client'
import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";


import Auth from "@/components/Auth";

export default function LoginModal() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const searchParams = useSearchParams();
  const isLoggedIn = searchParams.get("login") || false;
  console.log(isLoggedIn)
  useEffect(() => {
    dialogRef.current?.showModal();
  }, [isLoggedIn]);

  const handleSubmit = () => {
    dialogRef.current?.close();
  };

  return (
    <>
    <div className='fixed inset-0 bg-stone-900/90 overflow-y-auto h-full w-full min-w-[100vw] min-h-[100vh] left-0 right-0 top-0 bottom-0 z-[999] flex items-center justify-center'>
    </div>
      <dialog
      ref={dialogRef}
      onClose={() => router.back()}
      className="fixed inset-0 bg-black overflow-y-auto h-[50vh] w-[50vh] flex items-center justify-center z-[999] left-0 right-0 top-0 bottom-0 m-auto"
      >
      <button onClick={handleSubmit} className="absolute top-0 right-0 text-lime-500 text-6xl pr-2">&times;</button>
      <Auth onHandleSubmit={handleSubmit} />
     </dialog>
     </>
  )
}