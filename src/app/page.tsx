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
          PILOT PREVIEW // REWARD FUNDING NOT YET CONFIRMED
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
          GAMING FOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00f0ff] to-emerald-400 text-glow-green">
            GROCERIES
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg sm:text-2xl text-gray-300 font-normal leading-relaxed">
          A practical system for organizing gaming events, recording verified match results, and awarding participation points. Everyday rewards come later—only when funding, venue terms, and verification rules are confirmed.
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
              <div className="text-2xl font-black text-white">Not yet funded</div>
              <span className="text-xs text-[#00ff88]">Rewards paused</span>
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
      <section id="prizes" className="max-w-5xl mx-auto px-4 sm:px-6 scroll-mt-24">
        <div className="text-center space-y-5 mb-10">
          <div className="inline-block px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-bold tracking-widest uppercase">
            REWARDS REQUIRE VERIFIED FUNDING
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
            PLAY. <span className="text-[#00ff88]">VERIFY.</span> EARN.
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Gaming for Groceries is designed to turn verified participation into points and, when a sponsor has committed real funding, grocery or other everyday rewards.
          </p>
        </div>
        <div className="glass-card border border-[#00f0ff]/30 rounded-2xl p-6 sm:p-8 space-y-5">
          <h3 className="text-2xl font-black text-white">Current pilot status</h3>
          <p className="text-gray-300">
            No prize pool or grocery gift cards are currently promised. Reward funding, event date, venue participation, and reliable registration storage must be confirmed before a live event opens.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-white/5 border border-white/10 p-5">
              <h4 className="font-bold text-[#00ff88] mb-2">What we are building</h4>
              <p className="text-sm text-gray-300">A record of who participated, which match or activity took place, how an organizer verified it, and which points were earned—without awarding points twice for the same result.</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-5">
              <h4 className="font-bold text-[#00f0ff] mb-2">What is not live yet</h4>
              <p className="text-sm text-gray-300">Automatic cheat detection across arbitrary games, a funded grocery payout, and production-grade player-data integrations are not yet established. The first pilot uses transparent, organizer-confirmed results.</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">Points are participation records, not cash, food benefits, or a guaranteed redemption value. Any future reward rules and funding will be published before registration opens.</p>
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
      <section id="format" className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-10">
          <div className="inline-block px-3 py-1 rounded bg-white/10 border border-white/20 text-gray-300 font-mono text-xs font-bold tracking-widest uppercase">
            PROPOSED PILOT FLOW
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
            HOW A <span className="text-[#00ff88]">VERIFIED SESSION</span> WORKS
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            This is the intended flow, not a scheduled event. The venue, date, rules, and reward funding must be confirmed first.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="p-5 rounded-2xl glass-card">
            <h4 className="font-bold text-lg text-[#00ff88]">1. Check in</h4>
            <p className="text-sm text-gray-300 mt-1">The organizer confirms the player's event identity and records the chosen game. Collect only what the pilot actually needs.</p>
          </div>
          <div className="p-5 rounded-2xl glass-card">
            <h4 className="font-bold text-lg text-[#00f0ff]">2. Play and record the result</h4>
            <p className="text-sm text-gray-300 mt-1">For the first arcade pilot, a match result is entered by the organizer or supported by an agreed evidence source. No unsupported claim of automatic cheat detection is made.</p>
          </div>
          <div className="p-5 rounded-2xl glass-card">
            <h4 className="font-bold text-lg text-white">3. Verify and award points once</h4>
            <p className="text-sm text-gray-300 mt-1">An authorized organizer reviews the result. The same match cannot create duplicate points. Disputed results are held for review.</p>
          </div>
          <div className="p-5 rounded-2xl glass-card">
            <h4 className="font-bold text-lg text-amber-300">4. Redeem only against funded rewards</h4>
            <p className="text-sm text-gray-300 mt-1">A sponsor or venue must commit the reward budget before any reward is advertised. No unfunded grocery cards or prize debt.</p>
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
