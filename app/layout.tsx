import { Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import AuthDialog from "@/components/AuthDialog";
import { Rock_Salt } from "next/font/google";

const rockSalt = Rock_Salt({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--rock-salt',
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={`${outfit.className} ${rockSalt.variable} antialiased max-w-full overflow-x-hidden`}>
      <body className="bg-stone-200 dark:bg-stone-900 text-foreground grid grid-rows-[auto_1fr_auto] grid-cols-1 overflow-x-clip min-h-screen relative">
        <Nav />
        {children}
        <footer className="w-full border-t border-t-foreground/10 p-8 mt-16 flex justify-center text-center text-xs">
          <p>&copy; {new Date().getFullYear()} <span className={`font-rock-salt pl-3 text-xs font-extrabold text-lime-500`}>Screen<span className="text-foreground/80">Bits </span></span>Movie Trailer App by Paul Blizniuk</p>
        </footer>
      </body>
    </html>
  );
}
