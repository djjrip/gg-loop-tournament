import { getPlayers } from '../actions';
import Link from 'next/link';
import { Trophy, Gamepad2, ArrowLeft, Flame, Sparkles, ShieldCheck } from 'lucide-react';

export const revalidate = 0;

export default async function BracketPage() {
  const players = await getPlayers();
  const games = ["Street Fighter III: 3rd Strike", "Marvel vs. Capcom 2", "Tekken 8", "Arcade High-Score"];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#00ff88] transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Return to Event Overview
          </Link>
          <div className="inline-block px-3 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-mono font-bold tracking-widest uppercase mb-2">
            TOURNAMENT ENGINE // LIVE MATRIX
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
            LIVE BRACKET <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00f0ff]">STANDINGS</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">Double-elimination brackets and live match progression for Electric Starship Arcade.</p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/register"
            className="px-6 py-3 rounded-xl bg-[#00ff88] text-black font-black text-sm tracking-wider uppercase hover:bg-[#34d399] transition-all glow-green"
          >
            Enter Bracket
          </Link>
        </div>
      </div>

      {/* Live bracket: no invented competitors or results */}
      <section className="glass-card border border-white/10 rounded-3xl p-6 sm:p-10 space-y-5">
        <div className="inline-block px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase">
          No confirmed event in progress
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white">The bracket will appear here after a pilot is confirmed.</h2>
        <p className="text-gray-300">
          The example scores and player names previously shown on this page were demo content, not verified match results. They have been removed so the page cannot be mistaken for a live event.
        </p>
        <p className="text-sm text-gray-400">
          Before the bracket opens, GG LOOP needs a confirmed venue and date, reliable registration storage, published match rules, and a funded reward plan if rewards will be advertised.
        </p>
        <Link href="/" className="inline-block px-6 py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20">
          Read pilot status
        </Link>
      </section>

      {/* Roster & Registered Competitors */}


      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight flex items-center gap-3">
          <span>Registered Competitors ({players.length})</span>
        </h2>

        {players.length === 0 ? (
          <div className="glass-card p-12 rounded-2xl text-center space-y-4 border border-white/10">
            <p className="text-gray-400 text-lg">No competitors registered yet for the upcoming wave.</p>
            <Link
              href="/register"
              className="inline-block px-8 py-3 rounded-lg bg-[#00ff88] text-black font-bold text-sm tracking-wider uppercase hover:bg-[#34d399]"
            >
              Be The First Competitor
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {players.map((p: any, idx: number) => (
              <div key={p.id || idx} className="glass-card p-5 rounded-xl border border-white/10 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-gray-500">SEED #{idx + 1}</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300">{p.game}</span>
                </div>
                <div className="text-lg font-black text-white">{p.gamertag}</div>
                <div className="text-xs text-gray-400">Registered pilot participant</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
