import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GG Loop Tournament Platform',
  description: 'Official GG Loop Tournament Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0a] text-white min-h-screen flex flex-col`}>
        <header className="border-b border-gray-800 p-4 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="GG Loop Logo" className="h-10 w-auto" />
              <span className="font-bold text-xl tracking-wider text-white">GG LOOP</span>
            </Link>
            <nav className="gap-6 hidden sm:flex text-sm font-medium">
              <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
              <Link href="/register" className="hover:text-blue-500 transition-colors">Register</Link>
              <Link href="/bracket" className="hover:text-blue-500 transition-colors">Bracket</Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="border-t border-gray-800 p-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} GG Loop LLC. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
