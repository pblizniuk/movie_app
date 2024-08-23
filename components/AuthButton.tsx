import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { signOut } from '@/utils/actions/auth'

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      <span className="hidden md:block">Hi, {user.email}</span>
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="font-semibold inline-block rounded bg-lime-500 px-6 py-2 leading-normal text-white shadow-light-3 transition duration-150 ease-in-out hover:bg-lime-600 hover:shadow-light-2 focus:bg-lime-600 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-lime-600 active:shadow-light-2 motion-reduce:transition-none"
    >
      Login
    </Link>
  );
}
