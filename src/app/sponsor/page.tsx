import Link from 'next/link';
import { Trophy, ShieldCheck, Zap, Users, ArrowRight, DollarSign, CheckCircle2, Star, Sparkles, Building2 } from 'lucide-react';

export default function SponsorPage() {
  const stripeLink = "https://buy.stripe.com/cNi5kEgBd5C05Rlbzd1B603";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 space-y-24">
      {/* 1. HEADER */}
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#00ff88]/40 text-[#00ff88] text-xs font-mono font-bold tracking-widest uppercase glow-green">
          <Sparkles className="w-4 h-4 text-[#00ff88]" />
          B2B PARTNERSHIPS // DFW & NATIONAL ACTIVATIONS
        </div>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase leading-none">
          SPONSOR THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00f0ff] to-emerald-400 text-glow-green">
            GG LOOP NETWORK
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Connect your brand directly with 250+ engaged local competitive gamers, streamers, and esports fans across Dallas-Fort Worth. High-impact live tournament placements, stream overlays, and direct community goodwill.
        </p>
      </div>

      {/* 2. SPONSORSHIP TIERS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Tier 1: Founding Member */}
        <div className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-8 relative overflow-hidden">
          <div className="space-y-4">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Community / Creator</span>
            <h3 className="text-2xl font-black text-white">Founding Member</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-[#00ff88]">$29</span>
              <span className="text-gray-400 font-mono text-sm">/month</span>
            </div>
            <p className="text-sm text-gray-400">
              For competitive players and community teams seeking verified tournament standing and priority access.
            </p>
            <ul className="space-y-3 pt-4 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0 mt-0.5" />
                <span>Priority tournament seedings & registration lock</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0 mt-0.5" />
                <span>Verified Anti-Cheat Rating profile badge</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0 mt-0.5" />
                <span>Eligibility for cash and grocery match payouts</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0 mt-0.5" />
                <span>VIP Discord role & alpha telemetry updates</span>
              </li>
            </ul>
          </div>

          <a
            href={stripeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-white/10 text-white font-bold text-center tracking-wider uppercase hover:bg-white/20 transition-all block border border-white/10"
          >
            Activate Membership ($29)
          </a>
        </div>

        {/* Tier 2: Event Title Sponsor */}
        <div className="glass-card p-8 rounded-2xl border-2 border-[#00ff88]/60 flex flex-col justify-between space-y-8 relative overflow-hidden glow-green shadow-[0_0_35px_rgba(0,255,136,0.15)]">
          <div className="absolute top-0 right-0 bg-[#00ff88] text-black font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-bl-lg font-mono">
            MOST POPULAR
          </div>
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#00ff88] uppercase tracking-widest">Grassroots B2B</span>
            <h3 className="text-2xl font-black text-white">Event Sponsor</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-[#00ff88]">$500</span>
              <span className="text-gray-400 font-mono text-sm">/showcase</span>
            </div>
            <p className="text-sm text-gray-300">
              Direct title partner for a DFW tournament showcase. Full brand integration on-site and on broadcast.
            </p>
            <ul className="space-y-3 pt-4 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0 mt-0.5" />
                <span className="font-semibold text-white">"Powered by [Your Brand]" title placement on all brackets</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0 mt-0.5" />
                <span>Live stream overlay banners & rotating sponsor bugs</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0 mt-0.5" />
                <span>On-site product sampling / flyer distribution at venue</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0 mt-0.5" />
                <span>Direct gamer audience lead capture & social tagblasts</span>
              </li>
            </ul>
          </div>

          <a
            href={stripeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-[#00ff88] text-black font-black text-center tracking-wider uppercase hover:bg-[#34d399] transition-all block glow-green-lg"
          >
            Secure Title Sponsor ($500)
          </a>
        </div>

        {/* Tier 3: Premier LAN Activation */}
        <div className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-8 relative overflow-hidden">
          <div className="space-y-4">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Enterprise / Venue</span>
            <h3 className="text-2xl font-black text-white">Premier Activation</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-[#00f0ff]">$1,500</span>
              <span className="text-gray-400 font-mono text-sm">/event</span>
            </div>
            <p className="text-sm text-gray-400">
              Turnkey tournament operations, complete check-in kiosk system, and professional production team.
            </p>
            <ul className="space-y-3 pt-4 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                <span>Full turnkey bracket & player check-in OS deployment</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                <span>On-site tournament director & technical operator</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                <span>Dedicated 1080p60 multi-camera broadcast stream feed</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                <span>Custom telemetry anti-cheat verification for all stations</span>
              </li>
            </ul>
          </div>

          <a
            href={stripeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-[#00f0ff] text-black font-black text-center tracking-wider uppercase hover:bg-cyan-300 transition-all block shadow-[0_0_25px_rgba(0,240,255,0.3)]"
          >
            Book Premier LAN ($1,500)
          </a>
        </div>
      </div>

      {/* 3. DIRECT CONTACT / CUSTOM PROPOSALS */}
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl border border-white/10 text-center space-y-6">
        <h3 className="text-3xl font-black uppercase tracking-tight">Need a Custom Trade or In-Kind Partnership?</h3>
        <p className="text-gray-300 max-w-xl mx-auto text-base">
          We welcome food, beverage, and gaming gear sponsors who want to provide prize cards or venue refreshments in exchange for official tournament branding.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-mono text-gray-400">
          <div>Direct: <span className="text-white font-bold">(469) 371-8556</span></div>
          <span className="hidden sm:inline">•</span>
          <div>Email: <span className="text-white font-bold">jquindao1@icloud.com</span></div>
          <span className="hidden sm:inline">•</span>
          <div>HQ: <span className="text-white font-bold">Grand Prairie, TX</span></div>
        </div>
      </div>
    </div>
  );
}
