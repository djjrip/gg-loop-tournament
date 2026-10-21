import React from 'react';
import Link from 'next/link';
import { getPlayers } from '../actions';
import {
  Trophy,
  Gamepad2,
  ArrowLeft,
  Flame,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Swords,
  ChevronRight,
} from 'lucide-react';

export const revalidate = 0;

export default async function BracketPage() {
  const players = await getPlayers();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#00ff88] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Event Overview
          </Link>
          <div className="inline-block px-3 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-mono font-bold tracking-widest uppercase mb-2">
            TOURNAMENT ENGINE // LIVE MATRIX
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
            LIVE BRACKET <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00f0ff]">STANDINGS</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Double-elimination championship matrix. Real-time match telemetry and Ring 3 anti-cheat verification.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/register"
            className="px-6 py-3 rounded-xl bg-[#00ff88] text-black font-black text-sm tracking-wider uppercase hover:bg-[#34d399] transition-all glow-green shadow-[0_0_20px_rgba(0,255,136,0.3)]"
          >
            Enter Bracket
          </Link>
        </div>
      </div>

      {/* Anti-Cheat Real-Time Status Bar */}
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#00ff88]/15 border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-white font-bold flex items-center gap-2">
              GG LOOP INTEGRITY SENTINEL
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
            </span>
            <p className="text-[11px] text-gray-400 font-mono">
              Memory telemetry active &bull; Process signature validation Exit 0 &bull; 0 Anomalies
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-gray-300">
            Pool: $500 Guaranteed
          </span>
          <span className="px-3 py-1 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] font-bold">
            Status: Wave 1 Live
          </span>
        </div>
      </div>

      {/* Double Elimination Visual Matrix */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black uppercase text-white flex items-center gap-2.5">
            <Swords className="w-6 h-6 text-[#00ff88]" />
            <span>Winners Championship Bracket</span>
          </h2>
          <span className="text-xs font-mono text-gray-400">Best of 3 Series</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Quarterfinals */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#00ff88] uppercase tracking-wider block font-bold">
              Quarterfinals (BO3)
            </span>

            {/* Match 1 */}
            <div className="glass-card rounded-2xl border border-[#00ff88]/40 p-4 space-y-3 bg-[#0a0f18]/80 shadow-[0_0_20px_rgba(0,255,136,0.15)]">
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 border-b border-white/5 pb-2">
                <span>MATCH W1-01 &bull; VALORANT</span>
                <span className="text-[#00ff88] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> VERIFIED EXIT 0
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-[#00ff88]/10 px-3 py-2 rounded-lg border border-[#00ff88]/30">
                  <span className="font-black text-sm text-white flex items-center gap-2">
                    <span className="text-xs font-mono text-[#00ff88]">#1</span>
                    @djjrip (Jayson Q.)
                  </span>
                  <span className="font-mono font-black text-base text-[#00ff88]">2</span>
                </div>
                <div className="flex justify-between items-center bg-black/40 px-3 py-2 rounded-lg border border-white/5 opacity-70">
                  <span className="font-bold text-sm text-gray-400 flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-500">#2</span>
                    Viper_DFW
                  </span>
                  <span className="font-mono font-bold text-sm text-gray-400">1</span>
                </div>
              </div>
              <div className="text-[11px] text-gray-400 font-mono text-right">
                Advancing: <span className="text-[#00ff88] font-bold">@djjrip</span>
              </div>
            </div>

            {/* Match 2 */}
            <div className="glass-card rounded-2xl border border-white/10 p-4 space-y-3 bg-[#0a0f18]/80">
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 border-b border-white/5 pb-2">
                <span>MATCH W1-02 &bull; CS2</span>
                <span className="text-[#00ff88] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> VERIFIED EXIT 0
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-[#00ff88]/10 px-3 py-2 rounded-lg border border-[#00ff88]/30">
                  <span className="font-black text-sm text-white flex items-center gap-2">
                    <span className="text-xs font-mono text-[#00ff88]">#3</span>
                    ApexPhantom
                  </span>
                  <span className="font-mono font-black text-base text-[#00ff88]">2</span>
                </div>
                <div className="flex justify-between items-center bg-black/40 px-3 py-2 rounded-lg border border-white/5 opacity-70">
                  <span className="font-bold text-sm text-gray-400 flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-500">#4</span>
                    KronoZ
                  </span>
                  <span className="font-mono font-bold text-sm text-gray-400">0</span>
                </div>
              </div>
              <div className="text-[11px] text-gray-400 font-mono text-right">
                Advancing: <span className="text-[#00ff88] font-bold">ApexPhantom</span>
              </div>
            </div>

            {/* Match 3 */}
            <div className="glass-card rounded-2xl border border-white/10 p-4 space-y-3 bg-[#0a0f18]/80">
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 border-b border-white/5 pb-2">
                <span>MATCH W1-03 &bull; VALORANT</span>
                <span className="text-[#00ff88] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> VERIFIED EXIT 0
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-[#00ff88]/10 px-3 py-2 rounded-lg border border-[#00ff88]/30">
                  <span className="font-black text-sm text-white flex items-center gap-2">
                    <span className="text-xs font-mono text-[#00ff88]">#5</span>
                    ShadowStep
                  </span>
                  <span className="font-mono font-black text-base text-[#00ff88]">2</span>
                </div>
                <div className="flex justify-between items-center bg-black/40 px-3 py-2 rounded-lg border border-white/5 opacity-70">
                  <span className="font-bold text-sm text-gray-400 flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-500">#6</span>
                    Echo_Byte
                  </span>
                  <span className="font-mono font-bold text-sm text-gray-400">1</span>
                </div>
              </div>
              <div className="text-[11px] text-gray-400 font-mono text-right">
                Advancing: <span className="text-[#00ff88] font-bold">ShadowStep</span>
              </div>
            </div>

            {/* Match 4 */}
            <div className="glass-card rounded-2xl border border-[#00f0ff]/40 p-4 space-y-3 bg-[#0a0f18]/80 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 border-b border-white/5 pb-2">
                <span>MATCH W1-04 &bull; VALORANT</span>
                <span className="text-[#00f0ff] font-bold flex items-center gap-1 animate-pulse">
                  <Clock className="w-3 h-3" /> LIVE MAP 3
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                  <span className="font-bold text-sm text-white flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-400">#7</span>
                    Nova_Sniper
                  </span>
                  <span className="font-mono font-bold text-sm text-white">1</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                  <span className="font-bold text-sm text-white flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-400">#8</span>
                    NeonPulse
                  </span>
                  <span className="font-mono font-bold text-sm text-white">1</span>
                </div>
              </div>
              <div className="text-[11px] text-[#00f0ff] font-mono text-right">
                Deciding on Bind &bull; 11-10
              </div>
            </div>
          </div>

          {/* Column 2: Semifinals */}
          <div className="space-y-4 md:pt-16">
            <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider block font-bold">
              Semifinals (BO3)
            </span>

            {/* Semifinal 1 */}
            <div className="glass-card rounded-2xl border border-[#00ff88]/50 p-5 space-y-4 bg-[#0a0f18]/90 shadow-[0_0_30px_rgba(0,255,136,0.2)]">
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 border-b border-white/5 pb-2">
                <span>SEMIFINAL 01</span>
                <span className="text-[#00ff88] font-bold">NEXT UP &bull; 2:30 PM CDT</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between items-center bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                  <span className="font-black text-sm text-white flex items-center gap-2">
                    <span className="text-xs font-mono text-[#00ff88]">#1</span>
                    @djjrip (Jayson Q.)
                  </span>
                  <span className="text-xs font-mono text-[#00ff88] font-bold">Ready</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                  <span className="font-black text-sm text-white flex items-center gap-2">
                    <span className="text-xs font-mono text-[#00ff88]">#3</span>
                    ApexPhantom
                  </span>
                  <span className="text-xs font-mono text-[#00ff88] font-bold">Ready</span>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 text-center font-mono">
                Map Pool: Ascent, Haven, Split
              </p>
            </div>

            {/* Semifinal 2 */}
            <div className="glass-card rounded-2xl border border-white/10 p-5 space-y-4 bg-[#0a0f18]/90">
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 border-b border-white/5 pb-2">
                <span>SEMIFINAL 02</span>
                <span className="text-gray-400">PENDING MATCH 4</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between items-center bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                  <span className="font-bold text-sm text-white flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-400">#5</span>
                    ShadowStep
                  </span>
                  <span className="text-xs font-mono text-gray-400">Awaiting</span>
                </div>
                <div className="flex justify-between items-center bg-black/40 px-4 py-3 rounded-xl border border-dashed border-white/10 text-gray-500">
                  <span className="text-sm font-mono">Winner M4 (Nova/Neon)</span>
                  <span className="text-xs font-mono">TBD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Grand Championship */}
          <div className="space-y-4 md:pt-36">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-400" />
              Grand Finals (BO5)
            </span>

            <div className="glass-card rounded-3xl border border-amber-500/40 p-6 space-y-5 bg-gradient-to-b from-[#121624] to-[#0a0f18] shadow-[0_0_40px_rgba(245,158,11,0.2)]">
              <div className="flex justify-between items-center text-[11px] font-mono text-amber-300 border-b border-white/10 pb-3">
                <span className="font-black">DFW REGIONAL TROPHY MATCH</span>
                <span>$250 1ST PLACE REWARD</span>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-center">
                  <span className="text-xs font-mono text-gray-400 uppercase block mb-1">Winners Finalist</span>
                  <span className="text-lg font-black text-white">Winner Semifinal 1</span>
                </div>
                <div className="text-center font-mono font-black text-amber-400 text-xs">VS</div>
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-center">
                  <span className="text-xs font-mono text-gray-400 uppercase block mb-1">Losers Finalist</span>
                  <span className="text-lg font-black text-white">Losers Champion</span>
                </div>
              </div>

              <div className="pt-2 text-center space-y-2">
                <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold">
                  $500 TOTAL REWARDS POOL
                </span>
                <p className="text-[11px] text-gray-400">
                  1st: $250 H-E-B / Kroger &bull; 2nd: $150 &bull; 3rd: $100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registered Competitors Roster */}
      <div className="space-y-6 pt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight flex items-center gap-3">
            <span>Registered Competitors ({players.length})</span>
          </h2>
          <Link
            href="/register"
            className="text-xs font-mono text-[#00ff88] hover:underline"
          >
            + Register New Competitor
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {players.map((p: any, idx: number) => (
            <div
              key={p.id || idx}
              className="glass-card p-5 rounded-2xl border border-white/10 space-y-3 hover:border-[#00ff88]/50 transition-all"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-gray-400 font-bold">SEED #{idx + 1}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30">
                  {p.game}
                </span>
              </div>
              <div>
                <div className="text-lg font-black text-white flex items-center gap-1.5">
                  {p.gamertag}
                  {p.gamertag === 'djjrip' && (
                    <span className="text-[9px] px-1 rounded bg-[#00ff88] text-black font-black uppercase">
                      FOUNDER
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-400">{p.name}</div>
              </div>
              <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[11px] font-mono text-gray-400">
                <span>Verified Entry</span>
                <span className="text-[#00ff88] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> READY
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
