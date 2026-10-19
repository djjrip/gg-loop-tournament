import db from '../lib/db';
import { revalidatePath } from 'next/cache';

export async function registerPlayer(formData: FormData) {
  'use server';
  const gamertag = String(formData.get('gamertag') || '').trim().slice(0, 40);
  const email = String(formData.get('email') || '').trim().slice(0, 254);
  const game = String(formData.get('game') || '').trim().slice(0, 80);
  const name = gamertag;

  if (!gamertag || !email || !game || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Enter a gamertag, valid email, and game.' };
  }

  // Never accept live registrations on the current hosted setup: better-sqlite3
  // writes to a temporary serverless filesystem in production, so records can vanish.
  // The public registration form stays paused until a durable database adapter exists.
  if (process.env.VERCEL === '1' || process.env.NODE_ENV === 'production') {
    return { error: 'Pilot registration is paused until durable storage is configured. No registration was accepted.' };
  }
  if (process.env.PILOT_REGISTRATION_ENABLED !== 'true') {
    return { error: 'Pilot registration is currently closed. No registration was accepted.' };
  }

  try {
    const stmt = db.prepare(`
      INSERT INTO players (name, gamertag, email, phone, game)
      VALUES (?, ?, ?, NULL, ?)
    `);
    stmt.run(name, gamertag, email, game);
    
    revalidatePath('/admin');
    revalidatePath('/bracket');
    
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to register player' };
  }
}

export async function getPlayers() {
  const stmt = db.prepare('SELECT * FROM players ORDER BY created_at DESC');
  return stmt.all() as any[];
}
