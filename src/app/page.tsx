import Link from 'next/link';
import { ArrowRight, CheckCircle2, Gamepad2, Handshake, ShieldCheck, Trophy, Users } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Play',
    body: 'A player takes part in a real match or event. The first pilot is designed around a small in-person tournament, not an imaginary all-games tracker.',
  },
  {
    number: '02',
    title: 'Record',
    body: 'The result is recorded against a specific event, match, player, and game. A screenshot or other evidence may help the organizer review a dispute.',
  },
  {
    number: '03',
    title: 'Verify',
    body: 'For the first pilot, an authorized organizer confirms the result. Process names and file hashes alone cannot prove someone played fairly.',
  },
  {
    number: '04',
    title: 'Award points',
    body: 'The prototype includes tested rules for participation points and a small win bonus. Those rules still need secure organizer login and durable storage before a live event.',
  },
];

export default function Home() {
  return (
    <div className="space-y-20 py-12 md:py-20">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-8">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-[#00ff88]/40 text-[#00ff88] text-xs font-mono font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          Pilot in development — registration closed
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
          GAMING FOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00f0ff] to-emerald-400 text-glow-green">
            GROCERIES
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-2xl text-gray-300 leading-relaxed">
          GG LOOP is building a way for players to earn points from verified gaming activity — with grocery rewards only when a real sponsor has funded them.
        </p>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-400">
          The idea is simple: play, record the result, verify it, award points, and redeem rewards only when funding and rules are in place. The first step is a small, human-verified tournament pilot.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/bracket" className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card border border-white/20 text-white font-bold uppercase tracking-wide hover:border-[#00f0ff] transition-all flex items-center justify-center gap-3">
            View bracket status <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/sponsor" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00ff88] text-black font-black uppercase tracking-wide hover:bg-[#34d399] transition-all flex items-center justify-center gap-3">
            Explore sponsor pilot <Handshake className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section id="prizes" className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-block px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-bold tracking-widest uppercase">
            Points & rewards
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-white">
            Play should have <span className="text-[#00ff88]">real value</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Grocery support is the mission, not a prize we pretend is already paid for.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="glass-card border border-white/10 rounded-2xl p-6 space-y-3">
            <Trophy className="w-8 h-8 text-amber-300" />
            <h3 className="text-xl font-black text-white">No funded prize pool yet</h3>
            <p className="text-sm text-gray-300">No grocery-card amount is currently promised or available to redeem. A sponsor commitment must come before any reward is advertised.</p>
          </div>
          <div className="glass-card border border-white/10 rounded-2xl p-6 space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#00f0ff]" />
            <h3 className="text-xl font-black text-white">Verification first</h3>
            <p className="text-sm text-gray-300">The initial version uses an organizer to verify an observed result. It does not claim to detect every cheat or understand gameplay from every game.</p>
          </div>
          <div className="glass-card border border-white/10 rounded-2xl p-6 space-y-3">
            <Users className="w-8 h-8 text-[#00ff88]" />
            <h3 className="text-xl font-black text-white">Small pilot first</h3>
            <p className="text-sm text-gray-300">We need a confirmed venue, event date, published rules, reliable registration, and documented reward funding before opening the event.</p>
          </div>
        </div>
      </section>

      <section id="format" className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-block px-3 py-1 rounded bg-white/10 border border-white/20 text-gray-300 font-mono text-xs font-bold tracking-widest uppercase">
            How the loop works
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase">From match to points</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div key={step.number} className="glass-card border border-white/10 rounded-2xl p-6 space-y-3">
              <span className="text-3xl font-black text-[#00ff88]">{step.number}</span>
              <h3 className="text-xl font-black text-white">{step.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pilot-status" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="glass-card border border-amber-500/30 rounded-3xl p-7 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-7 h-7 text-[#00ff88]" />
            <h2 className="text-2xl sm:text-3xl font-black text-white">What exists today</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <p className="flex gap-2 text-sm text-gray-200"><CheckCircle2 className="w-5 h-5 text-[#00ff88] shrink-0" /> A working web-app prototype and bracket preview.</p>
              <p className="flex gap-2 text-sm text-gray-200"><CheckCircle2 className="w-5 h-5 text-[#00ff88] shrink-0" /> A small points-rules module with automated unit tests.</p>
              <p className="flex gap-2 text-sm text-gray-200"><CheckCircle2 className="w-5 h-5 text-[#00ff88] shrink-0" /> A design for organizer-confirmed results and duplicate checks.</p>
            </div>
            <div className="space-y-3">
              <p className="flex gap-2 text-sm text-gray-300"><span className="text-amber-300 font-black">!</span> Public sign-up is paused because hosted SQLite storage is temporary.</p>
              <p className="flex gap-2 text-sm text-gray-300"><span className="text-amber-300 font-black">!</span> No event date, venue agreement, or reward funding is confirmed here.</p>
              <p className="flex gap-2 text-sm text-gray-300"><span className="text-amber-300 font-black">!</span> Automatic verification from live game data is not implemented.</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">This is an honest progress snapshot, not a claim that a live tournament is open or that players can redeem points for groceries today.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/register" className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/15 px-6 py-3 text-white font-bold hover:bg-white/15">
              Registration status
            </Link>
            <Link href="/sponsor" className="inline-flex items-center justify-center rounded-xl bg-[#00ff88] px-6 py-3 text-black font-black hover:bg-[#34d399]">
              Discuss sponsor-funded pilot
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
