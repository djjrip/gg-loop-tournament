import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Trophy } from 'lucide-react';

export default function BracketPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto space-y-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
        <ArrowLeft className="w-4 h-4" /> Back to Gaming for Groceries
      </Link>
      <section className="glass-card border border-white/10 rounded-3xl p-7 sm:p-10 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest text-amber-200">
          <ShieldCheck className="w-4 h-4" /> No confirmed event in progress
        </div>
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          Bracket <span className="text-[#00ff88]">status</span>
        </h1>
        <p className="text-gray-300 leading-relaxed">
          There is no verified live bracket to display right now. Example names and scores shown in an earlier version were demonstration data, not real tournament results, so they have been removed.
        </p>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-5 space-y-3">
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-amber-300" />
            <h2 className="text-xl font-black text-white">What must be ready first</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
            <li>A confirmed venue, date, game, organizer, and match rules.</li>
            <li>Registration records that survive server restarts and are stored securely.</li>
            <li>A verified result workflow that prevents the same result earning points twice.</li>
            <li>Committed reward funding and clear redemption terms before any grocery card is promised.</li>
          </ul>
        </div>
        <p className="text-sm text-gray-400">
          The points rules are currently a tested code module, not a live player balance or redeemable currency. Points have no cash value today.
        </p>
        <Link href="/" className="inline-flex rounded-xl bg-[#00ff88] px-6 py-3 font-black text-black hover:bg-[#34d399]">
          View the pilot plan
        </Link>
      </section>
    </main>
  );
}
