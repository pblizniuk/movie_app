import Link from "next/link";
import { SubmitButton } from "./SubmitButton";
import { signIn, signUp } from "@/utils/actions/auth";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {

  return (
    <div className="flex-1 flex flex-col w-full sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={signIn}
          className="font-semibold inline-block rounded bg-lime-500 px-6 py-2 leading-normal text-white shadow-light-3 transition duration-150 ease-in-out hover:bg-lime-600 hover:shadow-light-2 focus:bg-lime-600 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-lime-600 active:shadow-light-2 motion-reduce:transition-none"
          pendingText="Signing In..."
        >
          Sign In
        </SubmitButton>
        <SubmitButton
          formAction={signUp}
          className="border border-lime-500 rounded-md px-4 py-2 text-foreground mb-2 transition duration-150 ease-in-out hover:bg-lime-600/5 hover:shadow-light-2 focus:bg-lime-600/5 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-lime-600/5 active:shadow-light-2 motion-reduce:transition-none"
          pendingText="Signing Up..."
        >
          Sign Up
        </SubmitButton>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
