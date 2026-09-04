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

      {/* Visual Tournament Bracket Matrix (Interactive Tree) */}
      <div className="glass-card border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-6 h-6 text-[#00ff88]" />
            <span className="text-xl font-black tracking-wider uppercase text-white">Featured Discipline: SFIII 3rd Strike</span>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30">
            ● WAVE 1 IN PROGRESS
          </span>
        </div>

        {/* 3-Column Visual Tree */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-2">
          {/* Column 1: Quarterfinals */}
          <div className="space-y-6">
            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00ff88]" /> Winners Quarterfinals
            </div>

            {/* Match 1 */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-2 hover:border-[#00ff88]/50 transition-colors">
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <span className="flex items-center gap-2"><span className="text-xs text-gray-500">#1</span> Daigo_DFW</span>
                <span className="px-2 py-0.5 rounded bg-[#00ff88]/20 text-[#00ff88] font-mono text-xs">2</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span className="flex items-center gap-2"><span className="text-xs text-gray-500">#8</span> ArcadePro99</span>
                <span className="font-mono text-xs">0</span>
              </div>
              <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-500">
                <span>CABINET #1</span>
                <span className="text-emerald-400 font-bold">MATCH FINAL</span>
              </div>
            </div>

            {/* Match 2 */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-2 hover:border-[#00ff88]/50 transition-colors">
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <span className="flex items-center gap-2"><span className="text-xs text-gray-500">#4</span> Justin_W</span>
                <span className="px-2 py-0.5 rounded bg-[#00ff88]/20 text-[#00ff88] font-mono text-xs">2</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span className="flex items-center gap-2"><span className="text-xs text-gray-500">#5</span> Vortex_FGC</span>
                <span className="font-mono text-xs">1</span>
              </div>
              <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-500">
                <span>CABINET #2</span>
                <span className="text-emerald-400 font-bold">MATCH FINAL</span>
              </div>
            </div>

            {/* Match 3 */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-2 hover:border-[#00ff88]/50 transition-colors">
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <span className="flex items-center gap-2"><span className="text-xs text-gray-500">#2</span> KenMaster_TX</span>
                <span className="px-2 py-0.5 rounded bg-[#00ff88]/20 text-[#00ff88] font-mono text-xs">2</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span className="flex items-center gap-2"><span className="text-xs text-gray-500">#7</span> ChunLiFan</span>
                <span className="font-mono text-xs">0</span>
              </div>
              <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-500">
                <span>CABINET #3</span>
                <span className="text-emerald-400 font-bold">MATCH FINAL</span>
              </div>
            </div>
          </div>

          {/* Column 2: Semifinals */}
          <div className="space-y-6 lg:mt-8">
            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#00f0ff]" /> Winners Semifinals
            </div>

            <div className="p-5 rounded-xl bg-black/70 border-2 border-[#00f0ff]/40 space-y-3 glow-cyan">
              <div className="flex justify-between items-center text-base font-bold text-white">
                <span>#1 Daigo_DFW</span>
                <span className="font-mono text-[#00ff88] text-lg font-black">1</span>
              </div>
              <div className="flex justify-between items-center text-base font-bold text-white">
                <span>#4 Justin_W</span>
                <span className="font-mono text-[#00f0ff] text-lg font-black">1</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-[#00f0ff]">
                <span>● STREAMED ON CAB #2</span>
                <span className="font-bold animate-pulse">GAME 3 IN PROGRESS</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-3">
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <span>#2 KenMaster_TX</span>
                <span className="font-mono text-gray-500">-</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>#3 SemiFinalist_B</span>
                <span className="font-mono text-gray-500">-</span>
              </div>
              <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-gray-500">
                WAITING ON MATCH 4
              </div>
            </div>
          </div>

          {/* Column 3: Championship Finals */}
          <div className="space-y-6 lg:mt-16">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-widest flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#f59e0b]" /> Championship Grand Finals
            </div>

            <div className="p-6 rounded-2xl bg-black/90 border-2 border-[#f59e0b]/60 space-y-4 glow-gold">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono uppercase text-[#f59e0b] font-bold">BEST OF 5 ROUNDS</span>
                <Trophy className="w-6 h-6 text-[#f59e0b]" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-lg font-black text-white">
                  <span>Winners Bracket Champ</span>
                  <span className="font-mono text-gray-500">-</span>
                </div>
                <div className="flex justify-between items-center text-lg font-black text-white">
                  <span>Losers Bracket Champ</span>
                  <span className="font-mono text-gray-500">-</span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-300">
                Payout: <span className="text-[#00ff88] font-bold">$150.00 Grocery Card</span> + Trophy
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <div className="text-xs text-gray-400">{p.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
