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
  metadataBase: new URL('https://gg-loop-tournament.vercel.app'),
  alternates: {
    canonical: 'https://gg-loop-tournament.vercel.app',
  },
  openGraph: {
    title: 'GG LOOP — Gaming for Groceries & Esports Tournament Platform',
    description: 'Compete in competitive gaming tournaments, verify match results with GG Loop Anti-Cheat, and earn points redeemable for groceries and gaming gear.',
    url: 'https://gg-loop-tournament.vercel.app',
    siteName: 'GG LOOP LLC',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GG LOOP — Gaming for Groceries & Esports Tournament Platform',
    description: 'Zero-API competitive gaming infrastructure & grocery prizing rails for Texas gamers.',
    creator: '@djjrip',
  },
  other: {
    'ai-screener-seal': 'e09085a994838d9feb38e15510040073cee8e12d7cb368c810f6b91426329d56',
    'ai-manifest': 'https://gg-loop-tournament.vercel.app/.well-known/ai-agent-manifest.json',
    'llms-spec': 'https://gg-loop-tournament.vercel.app/llms.txt',
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://gg-loop-tournament.vercel.app/#organization',
      'name': 'GG LOOP LLC',
      'url': 'https://gg-loop-tournament.vercel.app',
      'logo': 'https://gg-loop-tournament.vercel.app/logo.svg',
      'founder': {
        '@type': 'Person',
        'name': 'Jayson Quindao',
        'jobTitle': 'Founder & Principal Systems Architect',
        'email': 'jquindao1@icloud.com',
        'telephone': '(469) 371-8556',
        'alumniOf': 'University of Texas at Dallas',
        'sameAs': [
          'https://github.com/djjrip',
          'https://djjrip.github.io',
          'https://djjrip.github.io/resume.html'
        ]
      },
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Grand Prairie',
        'addressRegion': 'TX',
        'addressCountry': 'US'
      }
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://gg-loop-tournament.vercel.app/#software',
      'name': 'GG Loop Tournament Platform & Anti-Cheat SDK',
      'applicationCategory': 'GameApplication',
      'operatingSystem': 'Windows, Web',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
