'use client';

import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function Register() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-20 space-y-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
        <ArrowLeft className="w-4 h-4" /> Back to Gaming for Groceries
      </Link>

      <div className="glass-card border border-[#00f0ff]/30 rounded-2xl p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-3 text-[#00f0ff]">
          <ShieldCheck className="w-7 h-7" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">Pilot Preview</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          Player registration is <span className="text-[#00ff88]">not open yet</span>
        </h1>
        <p className="text-gray-300">
          We are building the check-in, match-result verification, and points ledger for Gaming for Groceries.
          We will not collect your personal details until the hosted system can store them reliably.
        </p>
        <div className="rounded-xl bg-white/5 border border-white/10 p-5 space-y-3">
          <h2 className="font-bold text-white">What has to be ready first</h2>
          <p className="text-sm text-gray-300">A confirmed event date and venue, a working persistent registration database, published match and points rules, and a sponsor-funded reward budget before any grocery prizes are promised.</p>
        </div>
        <p className="text-xs text-gray-400">
          This page is a preview—not an event registration, admission ticket, confirmed bracket seed, or promise of a reward.
          No information has been submitted or saved by viewing this page.
        </p>
        <Link href="/" className="inline-flex items-center justify-center rounded-xl bg-[#00ff88] px-6 py-3 font-black text-black hover:bg-[#34d399]">
          View the pilot plan
        </Link>
      </div>
    </main>
  );
}
