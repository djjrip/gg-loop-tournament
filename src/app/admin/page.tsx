import { getPlayers } from '../actions';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const revalidate = 0;

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get('admin_token')?.value === process.env.ADMIN_PASSWORD;

  if (!isAdmin && process.env.ADMIN_PASSWORD) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <form action={async (formData: FormData) => {
          'use server'
          const pwd = formData.get('password');
          if (pwd === process.env.ADMIN_PASSWORD) {
            const store = await cookies();
            store.set('admin_token', pwd as string);
            redirect('/admin');
          }
        }} className="bg-gray-900 p-8 rounded-xl border border-gray-800 space-y-4 w-full max-w-sm">
          <h1 className="text-2xl font-bold">Admin Login</h1>
          <input type="password" name="password" placeholder="Password" className="w-full bg-gray-950 border border-gray-800 rounded p-3 text-white" />
          <button type="submit" className="w-full bg-blue-600 p-3 rounded font-bold">Login</button>
        </form>
      </div>
    );
  }

  const players = await getPlayers();

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tournament Admin</h1>
        <form action={async () => {
          'use server'
          const store = await cookies();
          store.delete('admin_token');
          redirect('/admin');
        }}>
          <button type="submit" className="text-sm text-red-500 hover:text-red-400">Logout</button>
        </form>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="p-4 bg-gray-800 border-b border-gray-700">
          <h2 className="font-bold text-lg">Registered Players ({players.length})</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900 text-gray-400">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Gamertag</th>
                <th className="p-4">Name</th>
                <th className="p-4">Game</th>
                <th className="p-4">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {players.map((p: any) => (
                <tr key={p.id} className="hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-gray-500">#{p.id}</td>
                  <td className="p-4 font-bold text-blue-400">{p.gamertag}</td>
                  <td className="p-4">{p.name}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                      {p.game}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="text-gray-300">{p.email}</div>
                    <div className="text-gray-500">{p.phone}</div>
                  </td>
                </tr>
              ))}
              {players.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-500">
                    No players registered yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
