import { SubmitButton } from "./SubmitButton";
import { signIn, signUp } from "@/utils/actions/auth";

export default function Login({
  searchParams,
  onHandleSubmit
}: {
  searchParams: any;
  onHandleSubmit: () => void
}) {

  const handleSubmit = async (formData: FormData) => {
    onHandleSubmit();
    await signIn(formData);
  };

  return (
    <div className="flex-1 flex flex-col w-full sm:max-w-md justify-center gap-2">
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
          formAction={handleSubmit}
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
