'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { Trophy, ShoppingBag, ShieldCheck, User, LogOut, Sparkles, ChevronDown, Key } from 'lucide-react';

export default function Navbar() {
  const { user, isLoggedIn, isFounder, login, loginAsFounder, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const [gamertagInput, setGamertagInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [gameInput, setGameInput] = useState('Valorant');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gamertagInput || !emailInput) return;
    login(gamertagInput, emailInput, gameInput);
    setShowAuthModal(false);
  };

  return (
    <>
      <header className="border-b border-white/10 sticky top-0 bg-[#06080d]/90 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0">
            <div className="w-10 h-10 shrink-0 relative flex items-center justify-center bg-gradient-to-br from-[#00ff88]/20 to-[#00f0ff]/20 rounded-xl border border-[#00ff88]/40 shadow-[0_0_15px_rgba(0,255,136,0.3)]">
              <span className="font-black text-xl text-[#00ff88]">GG</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-wider text-white flex items-center gap-2">
                GG <span className="text-[#00ff88] text-glow-green">LOOP</span>
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30">LIVE</span>
              </span>
              <span className="text-[11px] font-mono text-gray-400 tracking-tight">Gaming for Groceries & Esports Ops</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold tracking-wide">
            <Link href="/" className="text-gray-300 hover:text-[#00ff88] transition-colors">
              Tournament
            </Link>
            <Link href="/bracket" className="text-gray-300 hover:text-[#00ff88] transition-colors flex items-center gap-1.5">
              Live Bracket
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
            </Link>
            <Link href="/#rewards" className="text-gray-300 hover:text-[#00ff88] transition-colors flex items-center gap-1.5">
              <ShoppingBag className="w-4 h-4 text-[#00f0ff]" />
              Rewards Vault
            </Link>
            <Link href="/#anti-cheat" className="text-gray-300 hover:text-[#00ff88] transition-colors flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00ff88]" />
              Anti-Cheat SDK
            </Link>
          </nav>

          {/* Right Action / Auth State */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#00ff88]/50 transition-all text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00ff88] to-[#00f0ff] p-[1px] flex items-center justify-center">
                    <div className="w-full h-full bg-[#06080d] rounded-lg flex items-center justify-center text-xs font-black text-[#00ff88]">
                      {user.gamertag.substring(0, 2).toUpperCase()}
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      {user.gamertag}
                      {isFounder && (
                        <span className="text-[9px] px-1 rounded bg-[#00ff88] text-black font-black uppercase">FOUNDER</span>
                      )}
                    </span>
                    <span className="text-[11px] font-mono text-[#00ff88] font-bold">
                      {user.points.toLocaleString()} PTS (${(user.points / 100).toFixed(2)})
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-[#0c101a] border border-white/15 p-3 shadow-2xl z-50 space-y-2">
                    <div className="p-2 border-b border-white/10 pb-3">
                      <p className="text-xs text-gray-400">Signed in as</p>
                      <p className="font-bold text-white text-sm">{user.name}</p>
                      <p className="text-xs text-[#00ff88] font-mono">{user.badge} &bull; {user.rank}</p>
                    </div>

                    <div className="space-y-1">
                      <Link
                        href="/register"
                        onClick={() => setDropdownOpen(false)}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-200 hover:bg-white/5 rounded-lg"
                      >
                        <Trophy className="w-4 h-4 text-[#00ff88]" />
                        <span>My Tournament Pass</span>
                      </Link>

                      <Link
                        href="/#rewards"
                        onClick={() => setDropdownOpen(false)}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-200 hover:bg-white/5 rounded-lg"
                      >
                        <ShoppingBag className="w-4 h-4 text-[#00f0ff]" />
                        <span>Redeem Grocery Cards</span>
                      </Link>

                      {isFounder && (
                        <Link
                          href="/admin"
                          onClick={() => setDropdownOpen(false)}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-amber-300 hover:bg-amber-500/10 rounded-lg"
                        >
                          <Key className="w-4 h-4" />
                          <span>Organizer Admin Portal</span>
                        </Link>
                      )}
                    </div>

                    <div className="pt-2 border-t border-white/10 flex justify-between items-center px-1">
                      <button
                        onClick={() => {
                          logout();
                          setDropdownOpen(false);
                        }}
                        className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1.5 py-1 px-2 rounded hover:bg-red-500/10"
                      >
                        <LogOut className="w-3.5 h-3.5" /> Sign Out
                      </button>

                      {!isFounder && (
                        <button
                          onClick={() => {
                            loginAsFounder();
                            setDropdownOpen(false);
                          }}
                          className="text-[11px] text-gray-400 hover:text-[#00ff88]"
                        >
                          Founder mode
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white border border-white/20 hover:border-[#00ff88] hover:text-[#00ff88] transition-all"
              >
                Sign In
              </button>
            )}

            <Link
              href="/register"
              className="px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase bg-[#00ff88] text-black hover:bg-[#34d399] transition-all shadow-[0_0_20px_rgba(0,255,136,0.4)] active:scale-95"
            >
              Enter Bracket
            </Link>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md rounded-3xl bg-[#0c101a] border border-[#00ff88]/40 p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(0,255,136,0.2)]">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono text-[#00ff88] uppercase tracking-widest font-bold">GG LOOP ID</span>
                <h3 className="text-2xl font-black text-white mt-1">Player Sign In</h3>
              </div>
              <button
                onClick={() => setShowAuthModal(false)}
                className="text-gray-400 hover:text-white text-lg font-bold"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-gray-300 block mb-1">Gamertag / Call-sign</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ApexPredator"
                  value={gamertagInput}
                  onChange={(e) => setGamertagInput(e.target.value)}
                  className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-white text-sm focus:border-[#00ff88] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-gray-300 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="gamer@ggloop.io"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-white text-sm focus:border-[#00ff88] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-gray-300 block mb-1">Primary Game</label>
                <select
                  value={gameInput}
                  onChange={(e) => setGameInput(e.target.value)}
                  className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-white text-sm focus:border-[#00ff88] focus:outline-none"
                >
                  <option value="Valorant">Valorant (5v5 Tactical)</option>
                  <option value="Counter-Strike 2">Counter-Strike 2</option>
                  <option value="Street Fighter 6">Street Fighter 6</option>
                  <option value="Tekken 8">Tekken 8</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#00ff88] text-black font-black uppercase text-sm tracking-wider hover:bg-[#34d399] transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)]"
              >
                Sign In & Claim 500 Welcome Points
              </button>
            </form>

            <div className="pt-4 border-t border-white/10 text-center">
              <button
                type="button"
                onClick={() => {
                  loginAsFounder();
                  setShowAuthModal(false);
                }}
                className="text-xs text-[#00f0ff] hover:underline font-mono"
              >
                Sign in as Founder (Jayson Quindao @djjrip)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
