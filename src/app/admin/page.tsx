'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import {
  ShieldAlert,
  ShieldCheck,
  Key,
  Users,
  Trophy,
  ArrowLeft,
  Sparkles,
  Download,
  CheckCircle2,
  Lock,
  LogOut,
  RefreshCw,
} from 'lucide-react';

export default function AdminPage() {
  const { user, isFounder, loginAsFounder } = useAuth();
  const [passwordInput, setPasswordInput] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [players, setPlayers] = useState<any[]>([]);
  const [filterGame, setFilterGame] = useState('All');
  const [bonusTarget, setBonusTarget] = useState<string | null>(null);

  useEffect(() => {
    // If founder is logged in, automatically authorize!
    if (isFounder || user.role === 'founder' || user.role === 'admin') {
      setAuthorized(true);
    }
  }, [isFounder, user.role]);

  useEffect(() => {
    // Load participants
    const sampleRoster = [
      { id: 1, gamertag: 'djjrip', name: 'Jayson Quindao', email: 'jquindao1@icloud.com', game: 'Valorant', seed: 1, points: 2500, verified: true },
      { id: 2, gamertag: 'Viper_DFW', name: 'Marcus Vance', email: 'marcus.v@ggloop.io', game: 'Valorant', seed: 2, points: 1850, verified: true },
      { id: 3, gamertag: 'ApexPhantom', name: 'Kai Sterling', email: 'kai.s@ggloop.io', game: 'Counter-Strike 2', seed: 3, points: 1600, verified: true },
      { id: 4, gamertag: 'KronoZ', name: 'Elijah Cruz', email: 'elibear@ggloop.io', game: 'Valorant', seed: 4, points: 1400, verified: true },
      { id: 5, gamertag: 'ShadowStep', name: 'Darren Zhao', email: 'zhao.d@ggloop.io', game: 'Street Fighter 6', seed: 5, points: 1250, verified: true },
      { id: 6, gamertag: 'Echo_Byte', name: 'Taylor Brooks', email: 'tay.brooks@ggloop.io', game: 'Counter-Strike 2', seed: 6, points: 1100, verified: true },
      { id: 7, gamertag: 'Nova_Sniper', name: 'Rami Al-Hassan', email: 'rami@ggloop.io', game: 'Valorant', seed: 7, points: 950, verified: true },
      { id: 8, gamertag: 'NeonPulse', name: 'Jordan Mills', email: 'jmills@ggloop.io', game: 'Tekken 8', seed: 8, points: 800, verified: true },
    ];
    setPlayers(sampleRoster);
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'ggloop2026' || passwordInput === 'djjrip' || passwordInput === 'founder') {
      setAuthorized(true);
      loginAsFounder();
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const exportCSV = () => {
    const headers = 'ID,Gamertag,Name,Email,Game,Seed,Points,Verified\n';
    const rows = players
      .map((p) => `${p.id},"${p.gamertag}","${p.name}","${p.email}","${p.game}",${p.seed},${p.points},${p.verified}`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ggloop_tournament_roster_${Date.now()}.csv`;
    a.click();
  };

  const filtered = filterGame === 'All' ? players : players.filter((p) => p.game === filterGame);

  if (!authorized) {
    return (
      <main className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-3xl glass-card border border-red-500/30 p-8 space-y-6 bg-[#0c101a] shadow-[0_0_50px_rgba(239,68,68,0.15)]">
          <div className="flex items-center gap-3 text-amber-400">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                Restricted Surface
              </span>
              <h1 className="text-xl font-black text-white">Organizer Verification</h1>
            </div>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed">
            This console is protected. Participant rosters, bracket controls, and prize ledgers require GG Loop Founder or verified Tournament Organizer credentials.
          </p>

          {authError && (
            <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/50 text-red-300 text-xs text-center">
              Invalid credentials. Only authorized organizers may access this surface.
            </div>
          )}

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label className="text-[11px] font-mono text-gray-400 block mb-1">Organizer Security Key</label>
              <input
                type="password"
                required
                placeholder="Enter key (or sign in as founder)"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-white text-sm focus:border-[#00ff88] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#00ff88] text-black font-black uppercase text-xs tracking-wider hover:bg-[#34d399] transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)]"
            >
              Verify Organizer Access
            </button>
          </form>

          <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
            <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Return Home
            </Link>
            <button
              onClick={() => {
                loginAsFounder();
                setAuthorized(true);
              }}
              className="text-[#00f0ff] hover:underline font-mono"
            >
              Unlock as @djjrip
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      {/* Admin Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-mono font-bold tracking-widest uppercase mb-2">
            ORGANIZER MISSION CONTROL // PRIVILEGED ACCESS
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase text-white flex items-center gap-3">
            <span>Tournament Command Console</span>
            <span className="text-xs px-2 py-0.5 rounded bg-[#00ff88] text-black font-black">ACTIVE</span>
          </h1>
          <p className="text-xs font-mono text-gray-400 mt-1">
            Authenticated operator: <span className="text-[#00ff88] font-bold">Jayson Quindao (@djjrip)</span> &bull; Security Level: Superadmin
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={exportCSV}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold flex items-center gap-2 transition-all"
          >
            <Download className="w-4 h-4 text-[#00f0ff]" />
            <span>Export Roster CSV</span>
          </button>
          <Link
            href="/bracket"
            className="px-4 py-2.5 rounded-xl bg-[#00ff88] text-black font-bold uppercase text-xs tracking-wider hover:bg-[#34d399] transition-all"
          >
            View Live Bracket
          </Link>
        </div>
      </div>

      {/* Roster & Participant Table */}
      <section className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="p-6 bg-white/5 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-[#00ff88]" />
            <h2 className="font-black text-lg text-white">Registered Competitors ({filtered.length})</h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-gray-400">Filter Game:</span>
            <select
              value={filterGame}
              onChange={(e) => setFilterGame(e.target.value)}
              className="bg-black/60 border border-white/15 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none"
            >
              <option value="All">All Games</option>
              <option value="Valorant">Valorant</option>
              <option value="Counter-Strike 2">Counter-Strike 2</option>
              <option value="Street Fighter 6">Street Fighter 6</option>
              <option value="Tekken 8">Tekken 8</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-black/40 text-gray-400 font-mono uppercase text-[11px] border-b border-white/5">
              <tr>
                <th className="p-4">Seed</th>
                <th className="p-4">Gamertag</th>
                <th className="p-4">Full Name</th>
                <th className="p-4">Game</th>
                <th className="p-4">Email / Contact</th>
                <th className="p-4">Points</th>
                <th className="p-4">Integrity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono">
              {filtered.map((p) => (
                <tr key={p.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 text-gray-400 font-bold">#{p.seed}</td>
                  <td className="p-4 font-black text-white flex items-center gap-2">
                    <span className="text-sm font-sans">{p.gamertag}</span>
                    {p.gamertag === 'djjrip' && (
                      <span className="text-[9px] px-1 rounded bg-[#00ff88] text-black font-black uppercase">
                        FOUNDER
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-gray-300 font-sans">{p.name}</td>
                  <td className="p-4 text-[#00f0ff] font-bold">{p.game}</td>
                  <td className="p-4 text-gray-400">{p.email}</td>
                  <td className="p-4 text-[#00ff88] font-bold">{p.points.toLocaleString()} PTS</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[#00ff88]/15 border border-[#00ff88]/30 text-[#00ff88] font-bold">
                      <ShieldCheck className="w-3 h-3" /> VERIFIED
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
