'use server'

import db from '../lib/db';
import { revalidatePath } from 'next/cache';

export async function registerPlayer(formData: FormData) {
  const name = formData.get('name') as string;
  const gamertag = formData.get('gamertag') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const game = formData.get('game') as string;

  if (!name || !gamertag || !email || !game) {
    return { error: 'Missing required fields' };
  }

  try {
    const stmt = db.prepare(`
      INSERT INTO players (name, gamertag, email, phone, game)
      VALUES (?, ?, ?, ?, ?)
    `);
    
    stmt.run(name, gamertag, email, phone || null, game);
    
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
