import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { signOut } from '@/utils/actions/auth'

export default async function AuthButton() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user ? (
    <div className="flex items-center gap-4">
      <span className="hidden md:block">Hi, {user.email}</span>
      <form action={signOut}>
        <button className="rounded-md bg-btn-background px-4 py-2 no-underline hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="shadow-light-3 hover:shadow-light-2 focus:shadow-light-2 active:shadow-light-2 inline-block rounded bg-lime-500 px-6 py-2 font-semibold leading-normal text-white transition duration-150 ease-in-out hover:bg-lime-600 focus:bg-lime-600 focus:outline-none focus:ring-0 active:bg-lime-600 motion-reduce:transition-none"
    >
      Login
    </Link>
  )
}
