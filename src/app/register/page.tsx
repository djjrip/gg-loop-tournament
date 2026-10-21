'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { registerPlayer } from '../actions';
import {
  Trophy,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Gamepad2,
  QrCode,
  Copy,
  Check,
  Calendar,
  MapPin,
  Flame,
} from 'lucide-react';

export default function Register() {
  const { user, isLoggedIn, addPoints } = useAuth();

  const [gamertag, setGamertag] = useState(user.role !== 'guest' ? user.gamertag : '');
  const [name, setName] = useState(user.role !== 'guest' ? user.name : '');
  const [email, setEmail] = useState(user.role !== 'guest' ? user.email : '');
  const [discord, setDiscord] = useState('');
  const [game, setGame] = useState(user.registeredGame || 'Valorant');
  const [rank, setRank] = useState('Diamond / Ascendant');
  const [agreed, setAgreed] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ticket, setTicket] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.set('gamertag', gamertag);
      formData.set('name', name);
      formData.set('email', email);
      formData.set('discord', discord);
      formData.set('game', game);
      formData.set('rank', rank);

      const res = await registerPlayer(formData);
      if (res.error) {
        setError(res.error);
        setLoading(false);
        return;
      }

      // Award +250 GG Points
      addPoints(250, 'Tournament Registration Bonus');

      setTicket({
        ticketCode: res.ticketCode,
        gamertag: res.gamertag,
        game: res.game,
        pointsAwarded: res.pointsAwarded || 250,
        registeredAt: new Date().toLocaleTimeString(),
      });
    } catch (err: any) {
      setError(err?.message || 'An error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!ticket) return;
    navigator.clipboard.writeText(ticket.ticketCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 md:py-16 space-y-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#00ff88] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Return to Gaming for Groceries
      </Link>

      {ticket ? (
        /* Confirmed Ticket Pass Screen */
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="glass-card border border-[#00ff88]/50 rounded-3xl p-6 sm:p-10 space-y-8 shadow-[0_0_60px_rgba(0,255,136,0.25)] relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-56 h-56 bg-[#00ff88]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#00ff88]/20 border border-[#00ff88] flex items-center justify-center text-[#00ff88]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#00ff88] font-bold">
                    Official Player Credential
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-black text-white">Entry Confirmed</h1>
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl bg-[#00ff88]/15 border border-[#00ff88]/40 text-[#00ff88] text-xs font-mono font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>+250 GG POINTS AWARDED</span>
              </div>
            </div>

            {/* Ticket Card */}
            <div className="bg-black/60 rounded-2xl border border-white/15 p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <span className="text-[11px] font-mono text-gray-400 uppercase">Competitor</span>
                  <p className="text-xl font-black text-white">{ticket.gamertag}</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-gray-400 uppercase">Title</span>
                  <p className="text-lg font-bold text-[#00f0ff]">{ticket.game}</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-gray-400 uppercase">Division</span>
                  <p className="text-sm font-semibold text-gray-200">Open Championship</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-gray-400 uppercase">Integrity</span>
                  <p className="text-xs font-mono font-bold text-[#00ff88] flex items-center gap-1 mt-1">
                    <ShieldCheck className="w-4 h-4" /> VERIFIED
                  </p>
                </div>
              </div>

              {/* Pass Barcode & Key */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                    Tournament Pass Key
                  </span>
                  <span className="text-xl sm:text-2xl font-mono font-black text-[#00ff88] tracking-widest">
                    {ticket.ticketCode}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-2 transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-[#00ff88]" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy Pass Key'}</span>
                </button>
              </div>

              {/* Event Logistics */}
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-gray-300">
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5">
                  <Calendar className="w-4 h-4 text-[#00f0ff]" />
                  <span>Check-in: Saturday, October 24 @ 1:00 PM CDT</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5">
                  <MapPin className="w-4 h-4 text-[#00ff88]" />
                  <span>DFW Hybrid Arena & Online Discord Lounge</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="/bracket"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00ff88] text-black font-black uppercase text-sm tracking-wider hover:bg-[#34d399] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,255,136,0.3)]"
              >
                <span>View Live Bracket Matrix</span>
                <Trophy className="w-4 h-4" />
              </Link>
              <Link
                href="/#rewards"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-white font-bold uppercase text-sm tracking-wider hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all text-center"
              >
                Explore Grocery Rewards Vault
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* Active Registration Form */
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-mono font-bold tracking-widest uppercase">
                <Flame className="w-3.5 h-3.5" /> DFW FALL INVITATIONAL 2026
              </div>
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
                Player <span className="text-[#00ff88] text-glow-green">Registration</span>
              </h1>
              <p className="text-gray-300 text-sm sm:text-base">
                Secure your tournament seed for the upcoming competitive wave. Double-elimination brackets, verified match integrity, and $500 in grocery & gear rewards.
              </p>
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/50 text-red-200 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="glass-card border border-white/10 rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">
                    Gamertag / Call-sign <span className="text-[#00ff88]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Viper_DFW"
                    value={gamertag}
                    onChange={(e) => setGamertag(e.target.value)}
                    className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-white text-sm focus:border-[#00ff88] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">
                    Full Name / Alias <span className="text-[#00ff88]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-white text-sm focus:border-[#00ff88] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">
                    Email Address <span className="text-[#00ff88]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="gamer@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-white text-sm focus:border-[#00ff88] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">
                    Discord Username
                  </label>
                  <input
                    type="text"
                    placeholder="gamer#1234 or gamer"
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)}
                    className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-white text-sm focus:border-[#00ff88] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">
                    Tournament Title <span className="text-[#00ff88]">*</span>
                  </label>
                  <select
                    value={game}
                    onChange={(e) => setGame(e.target.value)}
                    className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-white text-sm focus:border-[#00ff88] focus:outline-none"
                  >
                    <option value="Valorant">Valorant (5v5 Tactical)</option>
                    <option value="Counter-Strike 2">Counter-Strike 2</option>
                    <option value="Street Fighter 6">Street Fighter 6</option>
                    <option value="Tekken 8">Tekken 8</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-300 block mb-1">
                    Current Competitive Rank
                  </label>
                  <select
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                    className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-white text-sm focus:border-[#00ff88] focus:outline-none"
                  >
                    <option value="Radiant / Faceit Level 10">Radiant / Faceit Level 10</option>
                    <option value="Immortal / Premier 20k+">Immortal / Premier 20k+</option>
                    <option value="Diamond / Ascendant">Diamond / Ascendant</option>
                    <option value="Gold / Platinum">Gold / Platinum</option>
                    <option value="Open / All Ranks">Open / Community</option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 rounded bg-black/60 border-white/20 text-[#00ff88] focus:ring-0"
                  />
                  <span className="text-xs text-gray-300">
                    I agree to GG Loop Fair Play terms and allow match integrity verification via the GG Loop Anti-Cheat telemetry agent.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading || !agreed}
                className="w-full py-4 rounded-xl bg-[#00ff88] text-black font-black uppercase text-sm tracking-wider hover:bg-[#34d399] transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,255,136,0.35)]"
              >
                {loading ? (
                  <span>Generating Player Credential...</span>
                ) : (
                  <>
                    <span>Confirm Registration & Claim 250 Points</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Vitals Sidebar */}
          <div className="space-y-6">
            <div className="glass-card border border-white/10 rounded-3xl p-6 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00ff88] font-bold">
                Tournament Specs
              </span>

              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Prize Pool</span>
                  <p className="text-2xl font-black text-white">$500 Guaranteed</p>
                  <p className="text-xs text-[#00ff88]">Kroger, H-E-B & Visa Digital Cards</p>
                </div>

                <div className="border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Entry Fee</span>
                  <p className="text-xl font-black text-white">Free Online Qualifier</p>
                  <p className="text-xs text-gray-400">$12 Optional On-Site VIP Pass</p>
                </div>

                <div className="border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Format</span>
                  <p className="text-base font-bold text-white">Double Elimination</p>
                  <p className="text-xs text-gray-400">BO3 Matches &bull; Finals BO5</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">Anti-Cheat Enforcement</span>
                  <p className="text-xs text-gray-300 mt-1">
                    GG Loop Ring 3 User-Space Integrity SDK verifies processes, inputs, and packet checksums.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card border border-[#00f0ff]/20 rounded-3xl p-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-bold">
                Gaming for Groceries
              </span>
              <p className="text-xs text-gray-300 leading-relaxed">
                Every tournament match earns GG Points redeemable at major grocery partners. No fluff, no expired promises—compete with dignity, feed your squad.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
