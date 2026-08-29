'use client';

import { useState } from 'react';
import { registerPlayer } from '../actions';
import Link from 'next/link';

export default function Register() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    const result = await registerPlayer(formData);
    
    if (result.error) {
      setErrorMessage(result.error);
      setStatus('error');
    } else {
      setStatus('success');
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-3xl font-bold">Registration Complete!</h2>
        <p className="text-gray-400">You are locked in for the Electric Starship Showdown.</p>
        
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl mt-8">
          <h3 className="font-bold text-xl mb-4">Juice the Prize Pool</h3>
          <p className="text-gray-400 mb-6">
            Help grow the community prize pool! Contribute an optional $5 add-on via our secure Stripe checkout.
          </p>
          <a 
            href="https://buy.stripe.com/cNi5kEgBd5C05Rlbzd1B603" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#635BFF] hover:bg-[#4B45FF] text-white rounded-lg font-bold transition-colors"
          >
            Contribute $5 via Stripe
          </a>
        </div>

        <div className="pt-8 flex gap-4 justify-center">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">Return Home</Link>
          <span className="text-gray-600">|</span>
          <Link href="/bracket" className="text-blue-400 hover:text-blue-300 transition-colors">View Bracket</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Player Registration</h1>
        <p className="text-gray-400">Secure your spot in the bracket.</p>
      </div>

      <form action={handleSubmit} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 space-y-6">
        {status === 'error' && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg">
            {errorMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name *</label>
            <input required type="text" id="name" name="name" className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="John Doe" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="gamertag" className="text-sm font-medium text-gray-300">Gamertag *</label>
            <input required type="text" id="gamertag" name="gamertag" className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="e.g. Daigo" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address *</label>
            <input required type="email" id="email" name="email" className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="john@example.com" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number (Optional)</label>
            <input type="tel" id="phone" name="phone" className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="(555) 555-5555" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="game" className="text-sm font-medium text-gray-300">Select Event *</label>
          <select required id="game" name="game" className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none">
            <option value="" disabled selected>Choose your main game...</option>
            <option value="Street Fighter III: 3rd Strike">Street Fighter III: 3rd Strike</option>
            <option value="Marvel vs Capcom 2">Marvel vs Capcom 2</option>
            <option value="Tekken">Tekken (Latest Release)</option>
            <option value="High-Score Challenge">High-Score Challenge</option>
          </select>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg flex gap-4 text-sm text-blue-200">
          <svg className="w-6 h-6 shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <p>
            By registering, you agree to pay the $12 door admission and $49 tournament ops kit fee on-site at Electric Starship Arcade.
          </p>
        </div>

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg font-bold text-lg transition-all"
        >
          {status === 'loading' ? 'Registering...' : 'Complete Registration'}
        </button>
      </form>
    </div>
  );
}
