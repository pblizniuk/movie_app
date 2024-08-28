import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { signOut } from '@/utils/actions/auth'
import Icon from './Icons'

export default async function AuthButton() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log('reloaded auth button', user?.id)

  return !user ? (
    <Link
      href="/login"
      className="shadow-light-3 hover:shadow-light-2 focus:shadow-light-2 active:shadow-light-2 inline-block rounded bg-lime-500 px-6 py-2 font-semibold leading-normal text-white transition duration-150 ease-in-out hover:bg-lime-600 focus:bg-lime-600 focus:outline-none focus:ring-0 active:bg-lime-600 motion-reduce:transition-none"
    >
      Log In
    </Link>
  ) : (
    <span className="group relative">
      <span className="flex items-center">
        <Icon name="user" size="20" color="white" />
      </span>
      <div className="absolute right-0 top-3 hidden rounded-md bg-stone-600/90 px-3 py-2 text-foreground/80 group-hover:block">
        <div className="flex flex-col gap-3">
          <span className="hidden whitespace-nowrap md:block">
            Hi, {user.email}
          </span>
          <Link href="/account">Account</Link>
          <form action={signOut}>
            <button className="w-full rounded-md bg-btn-background px-4 py-2 no-underline hover:bg-btn-background-hover">
              Log Out
            </button>
          </form>
        </div>
      </div>
    </span>
  )
}
