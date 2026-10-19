import { getPlayers } from '../actions';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const revalidate = 0;

export default async function AdminPage() {
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedPassword) {
    return (
      <main className="min-h-screen max-w-2xl mx-auto p-8 flex items-center">
        <section className="bg-gray-900 border border-amber-700 rounded-xl p-8 space-y-3">
          <h1 className="text-2xl font-bold text-white">Organizer portal disabled</h1>
          <p className="text-gray-300">The server has no organizer password configured. The portal is closed rather than exposing participant details.</p>
        </section>
      </main>
    );
  }

  const cookieStore = await cookies();
  const isAdmin = cookieStore.get('admin_token')?.value === expectedPassword;

  if (!isAdmin) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4">
        <form action={async (formData: FormData) => {
          'use server';
          const submitted = formData.get('password');
          const configured = process.env.ADMIN_PASSWORD;
          if (!configured || typeof submitted !== 'string' || submitted !== configured) {
            redirect('/admin?error=invalid');
          }
          const store = await cookies();
          store.set('admin_token', configured, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/admin',
            maxAge: 60 * 60 * 8,
          });
          redirect('/admin');
        }} className="bg-gray-900 p-8 rounded-xl border border-gray-800 space-y-4 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-white">Organizer login</h1>
          <p className="text-sm text-gray-400">Participant details are private. Only authorized organizers can view them.</p>
          <input type="password" name="password" required autoComplete="current-password" placeholder="Organizer password" className="w-full bg-gray-950 border border-gray-800 rounded p-3 text-white" />
          <button type="submit" className="w-full bg-blue-600 p-3 rounded font-bold text-white">Sign in</button>
        </form>
      </main>
    );
  }

  const players = await getPlayers();

  return (
    <main className="p-4 md:p-8 max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Organizer preview</h1>
        <form action={async () => {
          'use server';
          const store = await cookies();
          store.delete({ name: 'admin_token', path: '/admin' });
          redirect('/admin');
        }}>
          <button type="submit" className="text-sm text-red-400 hover:text-red-300">Sign out</button>
        </form>
      </div>
      <div className="rounded-xl border border-amber-700 bg-amber-950/30 p-4 text-sm text-amber-100">
        The current hosted database uses temporary local storage and is not suitable for reliable live registrations. Do not use this view as the source of truth for a real event until persistent storage is configured.
      </div>
      <section className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="p-4 bg-gray-800 border-b border-gray-700">
          <h2 className="font-bold text-lg text-white">Stored participants ({players.length})</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900 text-gray-400"><tr><th className="p-4">Record</th><th className="p-4">Gamertag</th><th className="p-4">Name/alias</th><th className="p-4">Game</th><th className="p-4">Contact</th></tr></thead>
            <tbody className="divide-y divide-gray-800">
              {players.map((p: any) => (
                <tr key={p.id} className="hover:bg-gray-800/50">
                  <td className="p-4 text-gray-500">#{p.id}</td>
                  <td className="p-4 font-bold text-blue-400">{p.gamertag}</td>
                  <td className="p-4 text-gray-200">{p.name}</td>
                  <td className="p-4 text-gray-200">{p.game}</td>
                  <td className="p-4 text-gray-400">{p.email}</td>
                </tr>
              ))}
              {players.length === 0 && <tr><td colSpan={5} className="p-8 text-center text-gray-500">No stored records.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
