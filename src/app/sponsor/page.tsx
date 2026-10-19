import Link from 'next/link';
import { ArrowLeft, Handshake, ShieldCheck } from 'lucide-react';

export default function SponsorPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20 space-y-10">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
        <ArrowLeft className="w-4 h-4" /> Back to Gaming for Groceries
      </Link>
      <section className="text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] text-xs font-mono font-bold tracking-widest uppercase">
          <Handshake className="w-4 h-4" /> Sponsor-funded pilot
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase text-white">
          HELP MAKE <span className="text-[#00ff88]">PLAY PAY OFF</span>
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
          GG LOOP is designing local gaming events where verified participation earns points and sponsor-funded rewards can support everyday needs.
        </p>
      </section>
      <section className="glass-card border border-white/10 rounded-2xl p-6 sm:p-9 space-y-5">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-[#00ff88]" />
          <h2 className="text-2xl font-black text-white">Pilot status: planning, not yet booked</h2>
        </div>
        <p className="text-gray-300">
          We are not claiming an active event, a confirmed venue partner, a 250-person audience, or a funded prize pool. Sponsor packages are not being sold through automatic checkout until the venue, event date, audience plan, deliverables, and reward budget are agreed.
        </p>
        <p className="text-gray-300">
          The initial pilot would test one small tournament, organizer-confirmed match results, duplicate-resistant points records, and rewards only after funding is confirmed.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-white/5 border border-white/10 p-5">
            <h3 className="font-bold text-[#00ff88] mb-2">What a sponsor could fund</h3>
            <p className="text-sm text-gray-300">A clearly defined grocery-card pool, food, venue passes, or small event costs—documented before the event.</p>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-5">
            <h3 className="font-bold text-[#00f0ff] mb-2">What GG LOOP would report</h3>
            <p className="text-sm text-gray-300">Only verified registration, participation, completed matches, and delivered rewards, with no invented audience metrics.</p>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-5">
            <h3 className="font-bold text-amber-300 mb-2">What is required first</h3>
            <p className="text-sm text-gray-300">Venue/date confirmation, secure persistent registration storage, written terms, a real budget, and a tested organizer workflow.</p>
          </div>
        </div>
        <p className="text-xs text-gray-400">No payment is being collected on this page. Funding, benefits, and sponsorship deliverables must be agreed in writing.</p>
        <a href="mailto:jquindao1@icloud.com?subject=GG%20LOOP%20Pilot%20Sponsorship%20Discussion" className="inline-flex justify-center rounded-xl bg-[#00ff88] px-6 py-3 font-black text-black hover:bg-[#34d399]">
          Discuss a future pilot
        </a>
      </section>
    </main>
  );
}
