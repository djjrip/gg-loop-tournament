'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import {
  Trophy,
  Gamepad2,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  Flame,
  Users,
  ArrowRight,
  DollarSign,
  Store,
  CheckCircle2,
  ShoppingBag,
  Gift,
  ExternalLink,
  Zap,
} from 'lucide-react';

export default function Home() {
  const { user, isLoggedIn, redeemReward } = useAuth();
  const [claimMessage, setClaimMessage] = useState<{ title: string; code: string } | null>(null);
  const [claimError, setClaimError] = useState<string | null>(null);

  const REWARDS = [
    {
      id: 'kroger_10',
      title: '$10 Kroger Grocery Digital Pass',
      brand: 'Kroger',
      points: 1000,
      description: 'Instant barcode redeemable at any Kroger, Ralphs, or King Soopers checkout.',
      badge: 'POPULAR',
      color: 'from-blue-600/20 to-blue-400/10',
    },
    {
      id: 'heb_25',
      title: '$25 H-E-B Texas Grocery Card',
      brand: 'H-E-B',
      points: 2500,
      description: 'Texas favorite. Redeemable for fresh produce, meats, and groceries at any H-E-B store.',
      badge: 'DFW EXCLUSIVE',
      color: 'from-red-600/20 to-red-400/10',
    },
    {
      id: 'walmart_50',
      title: '$50 Walmart Essentials Card',
      brand: 'Walmart',
      points: 5000,
      description: 'Accepted in-store and online for food, supplies, and gaming gear nationwide.',
      badge: 'HIGH VALUE',
      color: 'from-amber-600/20 to-amber-400/10',
    },
    {
      id: 'central_100',
      title: '$100 Central Market Gourmet Pass',
      brand: 'Central Market',
      points: 10000,
      description: 'Championship reward. Premium chef-quality ingredients and groceries.',
      badge: 'CHAMPIONSHIP',
      color: 'from-emerald-600/20 to-emerald-400/10',
    },
  ];

  const handleClaim = (reward: (typeof REWARDS)[0]) => {
    setClaimError(null);
    setClaimMessage(null);
    const result = redeemReward(reward.id, reward.title, reward.points);
    if (!result.success) {
      setClaimError(result.error || 'Failed to claim reward');
    } else {
      setClaimMessage({ title: reward.title, code: result.code! });
    }
  };

  return (
    <div className="space-y-28 py-12 md:py-20">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative text-center space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-[#00ff88]/40 text-[#00ff88] text-xs font-mono font-bold tracking-widest uppercase glow-green">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
          TOURNAMENT REGISTRATION LIVE // DFW FALL INVITATIONAL 2026
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
          GAMING FOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00f0ff] to-emerald-400 text-glow-green">
            GROCERIES
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg sm:text-2xl text-gray-300 font-normal leading-relaxed">
          Compete in Valorant & Counter-Strike 2. Verify clean match results with GG Loop Anti-Cheat. Earn verified points redeemable for everyday grocery cards & gaming gear.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
          <Link
            href="/register"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[#00ff88] text-black font-black text-lg tracking-wider uppercase hover:bg-[#34d399] transition-all glow-green-lg active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(0,255,136,0.4)]"
          >
            <span>Enter Bracket (+250 Pts)</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/bracket"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl glass-card text-white font-bold text-lg tracking-wider uppercase hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all flex items-center justify-center gap-3"
          >
            <span>Live Bracket Standings</span>
          </Link>
        </div>

        {/* Live Vitals Ticker Bar */}
        <div className="pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="glass-card p-5 rounded-2xl border border-white/10 text-left">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <Trophy className="w-4 h-4 text-[#f59e0b]" /> Prize Pool
              </span>
              <div className="text-2xl font-black text-white">$500 Guaranteed</div>
              <span className="text-xs text-[#00ff88] font-mono">Grocery Cards & Cash</span>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/10 text-left">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <Store className="w-4 h-4 text-[#00f0ff]" /> Entry Fee
              </span>
              <div className="text-2xl font-black text-white">Free / $12 Door</div>
              <span className="text-xs text-gray-400 font-mono">Online Free / VIP On-Site</span>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/10 text-left">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-4 h-4 text-[#00ff88]" /> Format
              </span>
              <div className="text-2xl font-black text-white">Double Elim</div>
              <span className="text-xs text-gray-400 font-mono">Best of 3 / Finals BO5</span>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/10 text-left">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <MapPin className="w-4 h-4 text-rose-500" /> Host Venue
              </span>
              <div className="text-2xl font-black text-white">DFW Hybrid Arena</div>
              <span className="text-xs text-gray-400 font-mono">Grand Prairie & Online</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REWARDS VAULT SECTION */}
      <section id="rewards" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-24">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-bold tracking-widest uppercase">
            <ShoppingBag className="w-4 h-4" /> GAMING FOR GROCERIES REWARDS VAULT
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
            PLAY. <span className="text-[#00ff88]">VERIFY.</span> EAT.
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Every match recorded and verified by GG Loop awards points. 100 Points = $1.00 Grocery Credit. Redeem instantly for digital passes.
          </p>

          {/* User Points Badge */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-sm font-mono text-white">
              <Sparkles className="w-4 h-4 text-[#00ff88]" />
              <span>Your Current Balance:</span>
              <span className="font-black text-[#00ff88] text-base">
                {user.points.toLocaleString()} PTS (${(user.points / 100).toFixed(2)})
              </span>
            </span>
          </div>
        </div>

        {/* Claim Modal / Banner */}
        {claimMessage && (
          <div className="max-w-2xl mx-auto mb-10 p-6 rounded-2xl bg-[#00ff88]/15 border border-[#00ff88] space-y-3 animate-in fade-in">
            <div className="flex items-center gap-3 text-[#00ff88]">
              <CheckCircle2 className="w-6 h-6" />
              <h4 className="text-lg font-black text-white">Reward Voucher Issued!</h4>
            </div>
            <p className="text-sm text-gray-200">
              You redeemed <span className="font-bold text-white">{claimMessage.title}</span>. Your digital claim voucher code is:
            </p>
            <div className="p-3 rounded-xl bg-black/60 border border-white/20 font-mono text-xl font-black text-[#00ff88] tracking-widest text-center">
              {claimMessage.code}
            </div>
            <p className="text-xs text-gray-400 text-center">
              Present this code at tournament check-in or visit the cashier desk to claim your physical or digital card.
            </p>
          </div>
        )}

        {claimError && (
          <div className="max-w-md mx-auto mb-10 p-4 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-sm text-center">
            {claimError}
          </div>
        )}

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REWARDS.map((rew) => {
            const canAfford = user.points >= rew.points;
            return (
              <div
                key={rew.id}
                className="glass-card rounded-3xl border border-white/10 p-6 flex flex-col justify-between space-y-6 hover:border-[#00ff88]/50 transition-all group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${rew.color} opacity-20 pointer-events-none`} />

                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded bg-white/10 text-white">
                      {rew.brand}
                    </span>
                    <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/30">
                      {rew.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-[#00ff88] transition-colors">
                      {rew.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                      {rew.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10 relative z-10">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-mono text-gray-400">Redeem For</span>
                    <span className="text-lg font-mono font-black text-[#00ff88]">
                      {rew.points.toLocaleString()} PTS
                    </span>
                  </div>

                  <button
                    onClick={() => handleClaim(rew)}
                    disabled={!canAfford}
                    className={`w-full py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2 ${
                      canAfford
                        ? 'bg-[#00ff88] text-black hover:bg-[#34d399] shadow-[0_0_20px_rgba(0,255,136,0.3)]'
                        : 'bg-white/5 text-gray-400 cursor-not-allowed border border-white/10'
                    }`}
                  >
                    <Gift className="w-4 h-4" />
                    <span>{canAfford ? 'Redeem Digital Pass' : `Need ${(rew.points - user.points).toLocaleString()} Pts`}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Claimed Rewards Drawer if any */}
        {user.claimedRewards && user.claimedRewards.length > 0 && (
          <div className="mt-12 glass-card rounded-3xl border border-white/10 p-6 sm:p-8 space-y-4">
            <h4 className="font-bold text-white text-base flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#00ff88]" />
              <span>Your Claimed Reward Passes ({user.claimedRewards.length})</span>
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {user.claimedRewards.map((claim, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                  <span className="text-xs font-bold text-white block">{claim.title}</span>
                  <div className="font-mono text-sm font-bold text-[#00ff88]">{claim.code}</div>
                  <span className="text-[10px] font-mono text-gray-400">
                    Spent {claim.pointsSpent} PTS &bull; Confirmed
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 3. FEATURED COMPETITIVE ROSTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-block px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-bold tracking-widest uppercase">
            TOURNAMENT ROSTER
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
            ACTIVE <span className="text-[#00ff88]">TITLES</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-base">
            Compete across tactical shooters and competitive fighting games with real cash and grocery reward pools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card rounded-3xl p-6 border border-white/10 space-y-4 hover:border-[#00ff88]/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#00ff88]/20 flex items-center justify-center text-[#00ff88] font-black text-xl">
              V
            </div>
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase">Riot Games</span>
              <h3 className="text-xl font-black text-white">Valorant</h3>
            </div>
            <p className="text-xs text-gray-300">
              5v5 Tactical Shooter. Haven, Ascent, Split map pool. Verified via GG Loop Telemetry.
            </p>
            <div className="pt-2 text-xs font-mono text-[#00ff88] font-bold">16 Teams &bull; Double Elim</div>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-white/10 space-y-4 hover:border-[#00ff88]/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] font-black text-xl">
              CS
            </div>
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase">Valve</span>
              <h3 className="text-xl font-black text-white">Counter-Strike 2</h3>
            </div>
            <p className="text-xs text-gray-300">
              Premier competitive 5v5. Mirage, Inferno, Dust II. MR12 standard ruleset.
            </p>
            <div className="pt-2 text-xs font-mono text-[#00f0ff] font-bold">16 Teams &bull; Double Elim</div>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-white/10 space-y-4 hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-black text-xl">
              SF
            </div>
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase">Capcom</span>
              <h3 className="text-xl font-black text-white">Street Fighter 6</h3>
            </div>
            <p className="text-xs text-gray-300">
              1v1 Fighting Game Community bracket. 99-second rounds, BO3 games, BO5 finals.
            </p>
            <div className="pt-2 text-xs font-mono text-amber-400 font-bold">32 Solos &bull; Double Elim</div>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-white/10 space-y-4 hover:border-rose-500/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center text-rose-400 font-black text-xl">
              T8
            </div>
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase">Bandai Namco</span>
              <h3 className="text-xl font-black text-white">Tekken 8</h3>
            </div>
            <p className="text-xs text-gray-300">
              Next-gen 3D fighter. 60-second rounds, 3 rounds per game, Double Elimination.
            </p>
            <div className="pt-2 text-xs font-mono text-rose-400 font-bold">32 Solos &bull; Double Elim</div>
          </div>
        </div>
      </section>

      {/* 4. ANTI-CHEAT SENTINEL SECTION */}
      <section id="anti-cheat" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl border border-[#00ff88]/40 p-8 sm:p-12 relative overflow-hidden space-y-8 shadow-[0_0_60px_rgba(0,255,136,0.15)]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-white/10 pb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00ff88]/15 border border-[#00ff88]/40 text-[#00ff88] font-mono text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" /> PROPRIETARY ENGINE
              </div>
              <h3 className="text-3xl sm:text-5xl font-black uppercase text-white">
                GG LOOP <span className="text-[#00ff88]">ANTI-CHEAT SDK</span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
                Ring 3 user-space integrity sentinel developed by GG Loop LLC. Ensures every match in the Gaming for Groceries network is 100% fair, clean, and verified before prize distribution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/register"
                className="px-6 py-3.5 rounded-xl bg-[#00ff88] text-black font-black uppercase text-xs tracking-wider hover:bg-[#34d399] transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)] text-center"
              >
                Register & Verify (+250 Pts)
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#00ff88] font-bold">01 / SUB-MS TELEMETRY</span>
              <h4 className="font-bold text-white">Process Signature Verification</h4>
              <p className="text-xs text-gray-400">
                Continuous hash checks of game memory spaces without invasive ring 0 kernel drivers. Low CPU overhead (&lt; 0.5%).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#00f0ff] font-bold">02 / CRYPTOGRAPHIC AUDIT</span>
              <h4 className="font-bold text-white">HMAC SHA-256 Match Ledger</h4>
              <p className="text-xs text-gray-400">
                Every match score, round victory, and point allocation is cryptographically signed and stored in the tournament ledger.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-mono text-amber-400 font-bold">03 / INSTANT DISPUTE ARBITRATION</span>
              <h4 className="font-bold text-white">Automated Bracket Advancement</h4>
              <p className="text-xs text-gray-400">
                When a match finishes with Exit 0 verification, the winner is automatically promoted to the next bracket round within 3 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
