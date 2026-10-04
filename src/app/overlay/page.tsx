import React from "react";

export const metadata = {
  title: "GG Loop | Broadcast Overlay HUD",
  description: "Live tournament broadcast HUD for Gaming for Groceries",
};

export default function BroadcastOverlay() {
  return (
    <div className="w-[1920px] h-[1080px] bg-transparent text-white font-sans overflow-hidden relative select-none pointer-events-none p-10 flex flex-col justify-between">
      {/* Top Bar HUD */}
      <div className="flex justify-between items-center bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500 animate-pulse"></span>
            <span className="font-black text-sm tracking-widest text-red-400 uppercase">LIVE</span>
          </div>
          <div className="h-6 w-[1px] bg-white/20"></div>
          <div>
            <h1 className="font-extrabold text-base tracking-tight text-white flex items-center gap-2">
              <span className="text-emerald-400">GAMING FOR GROCERIES</span>
              <span className="text-white/40">|</span>
              <span className="text-slate-300 font-medium">Electric Starship Arcade</span>
            </h1>
          </div>
        </div>

        {/* Sponsor Banner */}
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-1.5 rounded-xl">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Official Performance Partner</span>
          <div className="flex items-center gap-2">
            <span className="font-black text-sm tracking-wide text-red-500">EXITLAG</span>
            <span className="bg-red-500/20 text-red-300 text-xs px-2 py-0.5 rounded font-mono font-bold">CODE: GGLOOP</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar HUD */}
      <div className="flex justify-between items-end">
        {/* Stream Channels Ticker */}
        <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-6 shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-bold text-sm">Twitch:</span>
            <span className="text-white font-mono text-sm">/kuyajrip</span>
          </div>
          <div className="h-4 w-[1px] bg-white/20"></div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold text-sm">Kick:</span>
            <span className="text-white font-mono text-sm">/jaysonbq</span>
          </div>
          <div className="h-4 w-[1px] bg-white/20"></div>
          <div className="flex items-center gap-2">
            <span className="text-red-400 font-bold text-sm">Platform:</span>
            <span className="text-white font-mono text-sm">ggloop.io</span>
          </div>
        </div>

        {/* Prize Pool & Booster */}
        <div className="bg-gradient-to-r from-emerald-950/80 to-slate-900/90 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-4 shadow-2xl flex items-center gap-5">
          <div>
            <div className="text-[11px] font-semibold tracking-wider text-emerald-400 uppercase">Prize Pool Booster ($5)</div>
            <div className="text-white text-xs font-medium text-slate-300">100% directly funds grocery cards for top 3</div>
          </div>
          <div className="bg-emerald-500 text-slate-950 font-black text-xs px-3 py-2 rounded-xl uppercase tracking-wider shadow">
            boost: buy.stripe.com/14A14o84H3tSa7B5aP1B604
          </div>
        </div>
      </div>
    </div>
  );
}
