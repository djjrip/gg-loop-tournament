import { getPlayers } from '../actions';

export const revalidate = 0; // Disable caching to auto-refresh

export default async function BracketPage() {
  const players = await getPlayers();
  
  // Group players by game
  const games = [...new Set(players.map((p: any) => p.game))];
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-8 text-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 uppercase">
            Live Standings
          </h1>
          <p className="text-2xl text-gray-400">Electric Starship Showdown</p>
        </header>

        {players.length === 0 ? (
          <div className="text-center text-gray-500 py-24 text-2xl">
            Awaiting combatants...
          </div>
        ) : (
          <div className="space-y-16">
            {games.map(game => {
              const gamePlayers = players.filter((p: any) => p.game === game);
              return (
                <section key={game as string} className="space-y-6">
                  <h2 className="text-3xl font-bold border-b border-gray-800 pb-4 text-blue-400">
                    {game as string}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {gamePlayers.map((player: any, index: number) => (
                      <div key={player.id} className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center justify-between shadow-lg">
                        <div className="flex items-center gap-4">
                          <span className="text-gray-600 font-mono font-bold text-xl w-6">#{index + 1}</span>
                          <div>
                            <div className="font-bold text-lg">{player.gamertag}</div>
                            <div className="text-gray-500 text-sm">{player.name}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
