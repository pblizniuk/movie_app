import { Outfit } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import { Rock_Salt } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const rockSalt = Rock_Salt({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--rock-salt',
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'ScreenBits Movie Trailer App',
  description: 'Test app by Paul Blizniuk',
}

const outfit = Outfit({ subsets: ['latin'] })

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${outfit.className} ${rockSalt.variable} max-w-full overflow-x-hidden antialiased`}
    >
      <body className="relative grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto] overflow-x-clip bg-stone-900 text-foreground">
        <Toaster position="bottom-center" />
        <Nav />
        {children}
        <footer className="mt-16 flex w-full justify-center border-t border-t-foreground/10 p-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()}{' '}
            <span
              className={`pl-3 font-rock-salt text-xs font-extrabold text-lime-500`}
            >
              Screen<span className="text-foreground/80">Bits </span>
            </span>
            Movie Showcase App by Paul Blizniuk
          </p>
        </footer>
        {modal}
      </body>
    </html>
  )
}
