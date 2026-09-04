import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GG LOOP — Tournament Operating System | Gaming for Groceries',
  description: 'The premier local esports & fighting game tournament platform. Compete for real-world grocery subsidies and verified community prize pools.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#06080d] text-[#f3f4f6] min-h-screen flex flex-col cyber-grid relative overflow-x-hidden selection:bg-[#00ff88] selection:text-black`}>
        {/* Ambient Top Glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] radial-glow pointer-events-none z-0" />
        
        {/* Global Esports Header */}
        <header className="border-b border-white/10 sticky top-0 bg-[#06080d]/85 backdrop-blur-xl z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative">
                <img src="/logo.png" alt="GG Loop" className="h-10 w-auto rounded object-contain drop-shadow-[0_0_12px_rgba(0,255,136,0.5)] transition-transform group-hover:scale-105" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-wider text-white flex items-center gap-2">
                  GG <span className="text-[#00ff88] text-glow-green">LOOP</span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30">OS</span>
                </span>
                <span className="text-[11px] font-mono text-gray-400 tracking-tight">Gaming for Groceries @ Electric Starship</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
              <Link href="/" className="text-gray-300 hover:text-[#00ff88] transition-colors">Event Overview</Link>
              <Link href="#prizes" className="text-gray-300 hover:text-[#00ff88] transition-colors">Grocery Prizes</Link>
              <Link href="/bracket" className="text-gray-300 hover:text-[#00ff88] transition-colors flex items-center gap-1.5">
                Live Brackets
                <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
              </Link>
              <Link href="#format" className="text-gray-300 hover:text-[#00ff88] transition-colors">Format & Rules</Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
                <span>HALTOM CITY, TX</span>
              </div>
              <Link 
                href="/register" 
                className="relative px-5 py-2.5 rounded-lg font-bold text-sm tracking-wider uppercase bg-[#00ff88] text-black hover:bg-[#34d399] transition-all glow-green active:scale-95 shadow-[0_0_20px_rgba(0,255,136,0.4)]"
              >
                Enter Bracket
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow z-10 relative">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="border-t border-white/10 bg-[#040609] py-12 px-4 relative z-10 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="GG Loop" className="h-8 w-auto opacity-80" />
              <div>
                <p className="font-bold text-white tracking-wider">GG LOOP LLC</p>
                <p className="text-xs text-gray-500">Autonomous Tournament Infrastructure & Community Gaming</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
              <a href="https://buy.stripe.com/cNi5kEgBd5C05Rlbzd1B603" target="_blank" rel="noopener noreferrer" className="text-[#00f0ff] hover:underline">
                ⚡ Juice the Prize Pool ($5 Stripe)
              </a>
              <a href="mailto:jquindao1@icloud.com" className="hover:text-white transition-colors">
                Partner / Sponsor Inquiry
              </a>
              <Link href="/admin" className="hover:text-white transition-colors">
                Organizer Portal
              </Link>
            </div>

            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} GG Loop LLC. In Partnership with Electric Starship Arcade.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
