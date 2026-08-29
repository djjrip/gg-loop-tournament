import Link from 'next/link';
import { MapPin, Calendar, Gamepad2, Trophy } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-8 animate-fade-in">
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium text-sm mb-4">
          Inaugural Pilot Event
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          ELECTRIC STARSHIP <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            SHOWDOWN
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          GG Loop LLC and Electric Starship Arcade present a premium fighting game and high-score tournament experience. Step up, plug in, and claim your glory.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href="/register" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            Register Now
          </Link>
          <Link href="/bracket" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-bold text-lg transition-all border border-gray-700">
            View Bracket
          </Link>
        </div>
      </section>

      {/* Details Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-blue-500/50 transition-colors">
          <div className="p-4 bg-blue-500/10 rounded-full text-blue-500">
            <MapPin className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-xl">The Venue</h3>
          <p className="text-gray-400 text-sm">
            Electric Starship Arcade<br/>
            Haltom City, TX
          </p>
        </div>
        
        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-blue-500/50 transition-colors">
          <div className="p-4 bg-blue-500/10 rounded-full text-blue-500">
            <Calendar className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-xl">The Date</h3>
          <p className="text-gray-400 text-sm">
            TBD<br/>
            Stay tuned for announcements
          </p>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-blue-500/50 transition-colors">
          <div className="p-4 bg-blue-500/10 rounded-full text-blue-500">
            <Gamepad2 className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-xl">The Games</h3>
          <p className="text-gray-400 text-sm">
            SFIII: 3rd Strike, MvC2,<br/>
            Tekken, High-Score Challenge
          </p>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-blue-500/50 transition-colors">
          <div className="p-4 bg-blue-500/10 rounded-full text-blue-500">
            <Trophy className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-xl">The Prize</h3>
          <p className="text-gray-400 text-sm">
            Crowdfunded Prize Pool<br/>
            Optional $5 add-on
          </p>
        </div>
      </section>

      {/* Format Info */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Tournament Format</h2>
            <p className="text-gray-400">Everything you need to know before you plug in.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center font-bold text-xl shrink-0">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Admission & Entry</h4>
                <p className="text-gray-400">$12 Door Admission goes directly to supporting Electric Starship Arcade. A $49 tournament ops kit fee supports GG Loop. Add an optional $5 to juice the prize pool!</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center font-bold text-xl shrink-0">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Double Elimination</h4>
                <p className="text-gray-400">Fighting game brackets will run standard double-elimination formats. Best of 3 until Winners Finals, Losers Finals, and Grand Finals (Best of 5).</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center font-bold text-xl shrink-0">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">High-Score Challenge</h4>
                <p className="text-gray-400">For arcade purists, set the highest score on selected classic cabinets during the event timeframe to claim the title.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
