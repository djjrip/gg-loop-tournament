import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { AuthProvider } from '../context/AuthContext'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GG LOOP — Gaming for Groceries & Esports Tournament Platform',
  description: 'Compete in competitive gaming tournaments, verify match results with GG Loop Anti-Cheat, and earn points redeemable for groceries and gaming gear.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#06080d] text-[#f3f4f6] min-h-screen flex flex-col cyber-grid relative overflow-x-hidden selection:bg-[#00ff88] selection:text-black`}>
        <AuthProvider>
          {/* Ambient Top Glow */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] radial-glow pointer-events-none z-0" />
          
          {/* Dynamic Esports Header with Customer Auth */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-grow z-10 relative">
            {children}
          </main>

        {/* Global Footer */}
        <footer className="border-t border-white/10 bg-[#040609] py-12 px-4 relative z-10 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.svg" 
                alt="GG Loop" 
                width={32}
                height={32}
                style={{ width: '32px', height: '32px' }}
                className="w-8 h-8 object-contain opacity-80" 
              />
              <div>
                <p className="font-bold text-white tracking-wider">GG LOOP LLC</p>
                <p className="text-xs text-gray-500">Gaming for Groceries pilot preview</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
              <a href="mailto:jquindao1@icloud.com" className="hover:text-white transition-colors">
                Partner / Sponsor Inquiry
              </a>
              <Link href="/admin" className="hover:text-white transition-colors">
                Organizer Portal
              </Link>
            </div>

            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} GG Loop LLC.
            </p>
          </div>
        </footer>
        </AuthProvider>
      </body>
    </html>
  )
}
