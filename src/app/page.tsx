import Link from 'next/link';
import { Trophy, Gamepad2, MapPin, Clock, ShieldCheck, Sparkles, Flame, Users, ArrowRight, DollarSign, Store } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-32 py-12 md:py-20">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative text-center space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-[#00ff88]/40 text-[#00ff88] text-xs font-mono font-bold tracking-widest uppercase glow-green">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
          PILOT TOURNAMENT // 32-SLOT CAP OPEN
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
          GAMING FOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00f0ff] to-emerald-400 text-glow-green">
            GROCERIES
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg sm:text-2xl text-gray-300 font-normal leading-relaxed">
          The zero-friction tournament operating system. Compete in DFW’s premier fighting game brackets at <span className="text-white font-bold">Electric Starship Arcade</span> for real-world grocery subsidies and community glory.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
          <Link
            href="/register"
            className="w-full sm:w-auto px-10 py-5 rounded-xl bg-[#00ff88] text-black font-black text-lg tracking-wider uppercase hover:bg-[#34d399] transition-all glow-green-lg active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(0,255,136,0.4)]"
          >
            <span>Lock In Registration</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/bracket"
            className="w-full sm:w-auto px-10 py-5 rounded-xl glass-card text-white font-bold text-lg tracking-wider uppercase hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all flex items-center justify-center gap-3"
          >
            <span>Live Bracket Matrix</span>
          </Link>
        </div>

        {/* Live Vitals Ticker Bar */}
        <div className="pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="glass-card p-5 rounded-xl border border-white/10 text-left">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <Trophy className="w-4 h-4 text-[#f59e0b]" /> Prize Pool
              </span>
              <div className="text-2xl font-black text-white">$265+ Guaranteed</div>
              <span className="text-xs text-[#00ff88]">Real Grocery Subsidies</span>
            </div>

            <div className="glass-card p-5 rounded-xl border border-white/10 text-left">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <Store className="w-4 h-4 text-[#00f0ff]" /> Door Entry
              </span>
              <div className="text-2xl font-black text-white">$12 At Register</div>
              <span className="text-xs text-gray-400">100% to Venue Support</span>
            </div>

            <div className="glass-card p-5 rounded-xl border border-white/10 text-left">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-4 h-4 text-[#00ff88]" /> Format
              </span>
              <div className="text-2xl font-black text-white">Double Elim</div>
              <span className="text-xs text-gray-400">Best of 3 / Finals BO5</span>
            </div>

            <div className="glass-card p-5 rounded-xl border border-white/10 text-left">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <MapPin className="w-4 h-4 text-rose-500" /> Host Venue
              </span>
              <div className="text-2xl font-black text-white">Electric Starship</div>
              <span className="text-xs text-gray-400">Haltom City, DFW</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GAMING FOR GROCERIES PRIZE POOL SECTION */}
      <section id="prizes" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-24">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] font-mono text-xs font-bold tracking-widest uppercase">
            REAL-WORLD VALUE EXCHANGE
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
            THE GROCERY SUBSIDY <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">PRIZE POOL</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Winners walk away with fully loaded grocery gift cards (HEB, Central Market, or Target) — subsidizing living costs while competing at the highest local tier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1st Place */}
          <div className="glass-card glass-card-hover p-8 rounded-2xl border-2 border-[#f59e0b]/60 relative overflow-hidden flex flex-col justify-between space-y-6 glow-gold">
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#f59e0b]/20 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] font-mono text-xs font-extrabold uppercase">
                  1ST PLACE CHAMPION
                </span>
                <Trophy className="w-8 h-8 text-[#f59e0b]" />
              </div>
              <div className="text-5xl font-black text-white mb-2">$150.00</div>
              <p className="text-sm text-gray-300 font-medium">Grocery Card (HEB / Central Market)</p>
            </div>
            <ul className="text-xs text-gray-400 space-y-2 border-t border-white/10 pt-4">
              <li className="flex items-center gap-2">✓ Verified Tournament Champion Trophy</li>
              <li className="flex items-center gap-2">✓ Free All-Day Pass to Electric Starship Arcade</li>
              <li className="flex items-center gap-2">✓ GG Loop Hall of Fame Leaderboard Placement</li>
            </ul>
          </div>

          {/* 2nd Place */}
          <div className="glass-card glass-card-hover p-8 rounded-2xl border border-white/20 relative overflow-hidden flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 font-mono text-xs font-extrabold uppercase">
                  2ND PLACE RUNNER-UP
                </span>
                <Sparkles className="w-8 h-8 text-gray-300" />
              </div>
              <div className="text-5xl font-black text-white mb-2">$75.00</div>
              <p className="text-sm text-gray-300 font-medium">Grocery Subsidy Gift Card</p>
            </div>
            <ul className="text-xs text-gray-400 space-y-2 border-t border-white/10 pt-4">
              <li className="flex items-center gap-2">✓ Official Runner-Up Medallion</li>
              <li className="flex items-center gap-2">✓ Arcade Concessions & Token Bundle</li>
              <li className="flex items-center gap-2">✓ Seeded Priority for Next Circuit Event</li>
            </ul>
          </div>

          {/* 3rd Place */}
          <div className="glass-card glass-card-hover p-8 rounded-2xl border border-amber-700/40 relative overflow-hidden flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-900/20 text-amber-500 font-mono text-xs font-extrabold uppercase">
                  3RD PLACE BRONZE
                </span>
                <Flame className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-5xl font-black text-white mb-2">$40.00</div>
              <p className="text-sm text-gray-300 font-medium">Grocery Subsidy Gift Card</p>
            </div>
            <ul className="text-xs text-gray-400 space-y-2 border-t border-white/10 pt-4">
              <li className="flex items-center gap-2">✓ Bronze Finish Placement Credit</li>
              <li className="flex items-center gap-2">✓ Free Arcade Drink & Snack Concession</li>
              <li className="flex items-center gap-2">✓ Circuit Points for DFW Finals</li>
            </ul>
          </div>
        </div>

        {/* Community Prize Juice Banner */}
        <div className="mt-8 p-6 rounded-2xl glass-card border border-[#00f0ff]/30 flex flex-col sm:flex-row items-center justify-between gap-6 glow-cyan">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#00f0ff]/20 text-[#00f0ff] rounded-xl">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white">Juice the Prize Pool ($5 Add-on)</h4>
              <p className="text-sm text-gray-400">100% of optional community booster payments go directly toward scaling the top 3 payouts.</p>
            </div>
          </div>
          <a
            href="https://buy.stripe.com/cNi5kEgBd5C05Rlbzd1B603"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#00f0ff] text-black font-extrabold text-sm rounded-lg tracking-wider uppercase hover:bg-cyan-300 transition-all shrink-0"
          >
            Boost Pool via Stripe
          </a>
        </div>
      </section>

      {/* 3. FEATURED COMPETITIVE TITLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-bold tracking-widest uppercase">
            TOURNAMENT ROSTER
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">DISCIPLINES</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Arcade-grade fighting game cabinets paired with contemporary competitive platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* SFIII: 3rd Strike */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#00ff88] uppercase tracking-widest">ARCADE HEAD-TO-HEAD</span>
              <Gamepad2 className="w-6 h-6 text-[#00ff88]" />
            </div>
            <h3 className="text-2xl font-black">Street Fighter III: 3rd Strike</h3>
            <p className="text-sm text-gray-400">
              The pinnacle of precision. Played directly on authentic CRT arcade cabinets with classic Sanwa controls.
            </p>
            <div className="pt-2 text-xs font-mono text-gray-500">
              Format: 2/3 Rounds, Best of 3 Games
            </div>
          </div>

          {/* Marvel vs. Capcom 2 */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-widest">CLASSIC HYPER-FIGHTER</span>
              <Gamepad2 className="w-6 h-6 text-[#00f0ff]" />
            </div>
            <h3 className="text-2xl font-black">Marvel vs. Capcom 2</h3>
            <p className="text-sm text-gray-400">
              New Age of Heroes. 3v3 team carnage running on arcade hardware. Infinite combos enabled.
            </p>
            <div className="pt-2 text-xs font-mono text-gray-500">
              Format: Standard Ratio Rules, Best of 3
            </div>
          </div>

          {/* Tekken 8 */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">NEXT-GEN FGC</span>
              <Gamepad2 className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-2xl font-black">Tekken 8</h3>
            <p className="text-sm text-gray-400">
              Aggressive 3D combat. Played on low-latency tournament displays. BYOC (Bring Your Own Controller) stick or leverless.
            </p>
            <div className="pt-2 text-xs font-mono text-gray-500">
              Format: 3/5 Rounds, Best of 3 Sets
            </div>
          </div>

          {/* Arcade High-Score Bounty */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">CABINET BOUNTY</span>
              <Trophy className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-black">Retro High-Score Challenge</h3>
            <p className="text-sm text-gray-400">
              Set the all-night high score on designated classic cabinets (Galaga, Donkey Kong, Pac-Man) to claim bonus cash.
            </p>
            <div className="pt-2 text-xs font-mono text-gray-500">
              Format: Single Credit Highest Score
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE LIVE BRACKET PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card border border-white/10 rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
            <div>
              <div className="inline-block text-xs font-mono text-[#00ff88] uppercase tracking-widest mb-2">
                TOURNAMENT ENGINE PREVIEW
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">LIVE DOUBLE-ELIMINATION MATRIX</h2>
              <p className="text-gray-400 text-sm mt-1">Real-time match progression and dynamic seeding powered by GG Loop TournamentOS.</p>
            </div>
            <Link
              href="/bracket"
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-[#00ff88] hover:text-black font-bold text-sm tracking-wider uppercase transition-all"
            >
              Full Interactive Bracket →
            </Link>
          </div>

          {/* Visual Bracket Preview Graphic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Round 1: Quarterfinals */}
            <div className="space-y-4">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Round 1: Quarterfinals</span>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-white">
                  <span>#1 Daigo_DFW</span>
                  <span className="text-[#00ff88]">2</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>#8 ArcadePro99</span>
                  <span>0</span>
                </div>
                <span className="text-[10px] font-mono text-gray-500 uppercase">FINAL // 3RD STRIKE</span>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-white">
                  <span>#4 Justin_W</span>
                  <span className="text-[#00ff88]">2</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>#5 Vortex_FGC</span>
                  <span>1</span>
                </div>
                <span className="text-[10px] font-mono text-gray-500 uppercase">FINAL // 3RD STRIKE</span>
              </div>
            </div>

            {/* Round 2: Semifinals */}
            <div className="space-y-4 md:mt-10">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Winners Semifinals</span>
              <div className="p-5 rounded-xl bg-black/60 border border-[#00ff88]/30 space-y-3 glow-green">
                <div className="flex justify-between items-center text-sm font-bold text-white">
                  <span>#1 Daigo_DFW</span>
                  <span className="text-[#00ff88] font-mono">1</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold text-white">
                  <span>#4 Justin_W</span>
                  <span className="text-[#00f0ff] font-mono">1</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10 text-[10px] font-mono text-[#00ff88]">
                  <span>● LIVE ON CABINET #2</span>
                  <span>GAME 3 DECIDER</span>
                </div>
              </div>
            </div>

            {/* Round 3: Grand Finals */}
            <div className="space-y-4 md:mt-20">
              <span className="text-xs font-mono text-[#f59e0b] uppercase tracking-wider block">Grand Finals (BO5)</span>
              <div className="p-6 rounded-xl bg-black/80 border-2 border-[#f59e0b]/60 space-y-3 glow-gold">
                <div className="text-xs font-mono text-[#f59e0b] uppercase font-bold">CHAMPIONSHIP MATCH</div>
                <div className="flex justify-between items-center text-base font-black text-white">
                  <span>Winners Bracket Finalist</span>
                  <span className="text-gray-600 font-mono">-</span>
                </div>
                <div className="flex justify-between items-center text-base font-black text-white">
                  <span>Losers Bracket Finalist</span>
                  <span className="text-gray-600 font-mono">-</span>
                </div>
                <div className="text-xs text-gray-400 pt-2 border-t border-white/10">
                  Prize: $150 Grocery Subsidy + Trophy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EVENT TIMELINE SCHEDULE */}
      <section id="format" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded bg-white/10 border border-white/20 text-gray-300 font-mono text-xs font-bold tracking-widest uppercase">
            OPERATIONS SCHEDULE
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
            EVENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00ff88]">TIMELINE</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Zero delays. Streamlined check-in, immediate bracket seeding, and rapid match turnarounds.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <div className="p-6 rounded-2xl glass-card flex items-start gap-6">
            <div className="text-lg font-mono font-black text-[#00ff88] shrink-0 pt-0.5">6:00 PM</div>
            <div>
              <h4 className="font-bold text-lg text-white">Doors Open & Freeplay Casuals</h4>
              <p className="text-sm text-gray-400 mt-1">Pay your $12 venue fee at the arcade register. Warm up on arcade cabinets and casual setups.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card flex items-start gap-6">
            <div className="text-lg font-mono font-black text-[#00f0ff] shrink-0 pt-0.5">7:00 PM</div>
            <div>
              <h4 className="font-bold text-lg text-white">Check-in Closes & Bracket Seed Lock</h4>
              <p className="text-sm text-gray-400 mt-1">Final participant check-in. GG Loop TournamentOS publishes the double-elimination bracket matrix.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card flex items-start gap-6">
            <div className="text-lg font-mono font-black text-white shrink-0 pt-0.5">7:30 PM</div>
            <div>
              <h4 className="font-bold text-lg text-white">Wave 1 Bracket Matches</h4>
              <p className="text-sm text-gray-400 mt-1">Winners and Losers rounds commence across all designated cabinets and tournament displays.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card flex items-start gap-6">
            <div className="text-lg font-mono font-black text-[#f59e0b] shrink-0 pt-0.5">9:00 PM</div>
            <div>
              <h4 className="font-bold text-lg text-white">Top 4 & Grand Finals</h4>
              <p className="text-sm text-gray-400 mt-1">Best of 5 championship series. Main screen broadcast in the arcade.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card flex items-start gap-6">
            <div className="text-lg font-mono font-black text-[#00ff88] shrink-0 pt-0.5">9:45 PM</div>
            <div>
              <h4 className="font-bold text-lg text-white">Awards & Grocery Card Payouts</h4>
              <p className="text-sm text-gray-400 mt-1">Presentation of $150, $75, and $40 grocery subsidies and champion trophies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VENUE PARTNER SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card border border-white/10 rounded-3xl p-8 sm:p-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-block text-xs font-mono text-[#00ff88] uppercase tracking-widest">
              OFFICIAL VENUE PARTNER
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">ELECTRIC STARSHIP ARCADE</h2>
            <p className="text-gray-300 leading-relaxed">
              DFW’s home for authentic retro gaming. Over 100+ arcade cabinets and pinball machines set to freeplay with standard door admission. Featuring dedicated fighting game head-to-head candy cabs.
            </p>
            <div className="space-y-3 text-sm text-gray-400 font-mono">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-rose-400" />
                <span>5620 Denton Hwy, Haltom City, TX 76148</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#00f0ff]" />
                <span>Capacity: 100+ Players & Spectators</span>
              </div>
              <div className="flex items-center gap-3">
                <Store className="w-5 h-5 text-[#00ff88]" />
                <span>$12 All-Day Freeplay Admission at Front Desk</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-black/60 border border-white/10 space-y-6">
            <h4 className="font-bold text-xl text-white">Why "Gaming for Groceries"?</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Most local tournaments charge steep fees that disappear into administrative pockets. GG Loop flips the model: the arcade takes 100% of door admissions, while tournament competitors battle for real groceries and meal subsidies funded by brand sponsors.
            </p>
            <div className="p-4 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/30 text-xs text-[#00ff88] font-mono">
              ★ Zero administrative drag. Verified payouts. Real community value.
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
        <h2 className="text-4xl sm:text-7xl font-black tracking-tighter uppercase">
          READY TO <span className="text-[#00ff88] text-glow-green">PLUG IN</span>?
        </h2>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Slots are capped at 32 players per title to maintain tournament pacing. Claim your spot before the bracket locks.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
            href="/register"
            className="px-10 py-5 rounded-xl bg-[#00ff88] text-black font-black text-lg tracking-wider uppercase hover:bg-[#34d399] transition-all glow-green-lg"
          >
            Claim Your Spot
          </Link>
          <Link
            href="/bracket"
            className="px-10 py-5 rounded-xl glass-card text-white font-bold text-lg tracking-wider uppercase hover:border-white/40 transition-all"
          >
            View Live Standings
          </Link>
        </div>
      </section>
    </div>
  );
}
