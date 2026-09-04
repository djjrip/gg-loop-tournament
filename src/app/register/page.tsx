'use client';

import { useState } from 'react';
import { registerPlayer } from '../actions';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, DollarSign, Trophy, Sparkles } from 'lucide-react';

export default function Register() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [registeredTag, setRegisteredTag] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    const tag = formData.get('gamertag') as string;
    setRegisteredTag(tag || 'Competitor');
    const result = await registerPlayer(formData);
    
    if (result.error) {
      setErrorMessage(result.error);
      setStatus('error');
    } else {
      setStatus('success');
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-8 animate-fade-in">
        <div className="w-24 h-24 bg-[#00ff88]/20 text-[#00ff88] rounded-full flex items-center justify-center mx-auto border-2 border-[#00ff88] glow-green-lg">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30 uppercase tracking-widest">
            SEED SECURED
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
            {registeredTag} IS LOCKED IN!
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            You are officially registered for Gaming for Groceries at Electric Starship Arcade. Door admission is $12 at the front desk.
          </p>
        </div>
        
        {/* Optional Prize Juice Card */}
        <div className="glass-card border border-[#00f0ff]/30 p-8 rounded-2xl text-left space-y-4 glow-cyan">
          <div className="flex items-center gap-3 text-[#00f0ff]">
            <Trophy className="w-6 h-6" />
            <h3 className="font-black text-xl text-white uppercase tracking-wider">Juice the Prize Pool ($5 Add-on)</h3>
          </div>
          <p className="text-sm text-gray-300">
            Want to scale the grocery payouts for top finishers? 100% of community prize boosters go directly to the top 3 grocery gift card funds.
          </p>
          <div className="pt-2">
            <a 
              href="https://buy.stripe.com/cNi5kEgBd5C05Rlbzd1B603" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00f0ff] hover:bg-cyan-300 text-black font-extrabold rounded-lg tracking-wider uppercase transition-all shadow-lg"
            >
              <DollarSign className="w-4 h-4" />
              <span>Contribute $5 via Stripe</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex gap-6 justify-center text-sm font-semibold">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Return to Event Overview
          </Link>
          <span className="text-gray-700">|</span>
          <Link href="/bracket" className="text-[#00ff88] hover:underline">
            View Live Bracket Matrix →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 space-y-8">
      <div>
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#00ff88] transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Return to Event Overview
        </Link>
        <div className="inline-block px-3 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] font-mono text-xs font-bold tracking-widest uppercase mb-2">
          COMPETITOR CHECK-IN
        </div>
        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
          PLAYER <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00f0ff]">REGISTRATION</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">Claim your slot in the 32-player double-elimination bracket.</p>
      </div>

      <form action={handleSubmit} className="glass-card border border-white/10 rounded-2xl p-8 sm:p-10 space-y-6">
        {status === 'error' && (
          <div className="bg-rose-500/10 border border-rose-500/50 text-rose-400 p-4 rounded-xl text-sm font-medium">
            {errorMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
              Full Legal Name *
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-all"
              placeholder="e.g. Alex Mercer"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="gamertag" className="text-xs font-mono font-bold uppercase tracking-wider text-[#00ff88]">
              Tournament Gamertag *
            </label>
            <input
              required
              type="text"
              id="gamertag"
              name="gamertag"
              className="w-full bg-black/60 border border-[#00ff88]/40 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-all glow-green"
              placeholder="e.g. Daigo_DFW"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
              Email Address *
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-all"
              placeholder="alex@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
              Phone Number (SMS Match Alerts)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-all"
              placeholder="(214) 555-0192"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="game" className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
            Select Tournament Discipline *
          </label>
          <select
            required
            id="game"
            name="game"
            className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-all cursor-pointer"
          >
            <option value="" disabled selected>Choose your tournament game...</option>
            <option value="Street Fighter III: 3rd Strike">Street Fighter III: 3rd Strike (Arcade Cab)</option>
            <option value="Marvel vs. Capcom 2">Marvel vs. Capcom 2 (Dreamcast / Cab)</option>
            <option value="Tekken 8">Tekken 8 (PS5 / BYOC)</option>
            <option value="Arcade High-Score Challenge">Classic Cabinet High-Score Bounty</option>
          </select>
        </div>

        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-400 space-y-1 font-mono">
          <p className="text-gray-300 font-bold">★ Door Admission Notice:</p>
          <p>Venue entry is $12 collected at the Electric Starship front desk (includes all-day arcade freeplay). Tournament registration guarantees your bracket seed.</p>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 rounded-xl bg-[#00ff88] text-black font-black text-base uppercase tracking-widest hover:bg-[#34d399] transition-all glow-green-lg disabled:opacity-50 active:scale-95 shadow-[0_0_25px_rgba(0,255,136,0.3)]"
        >
          {status === 'loading' ? 'Securing Seed Slot...' : 'Lock In Registration'}
        </button>
      </form>
    </div>
  );
}
