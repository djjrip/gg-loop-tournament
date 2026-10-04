import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const isVercel = process.env.VERCEL === '1' || process.env.NODE_ENV === 'production';
const dbDir = isVercel ? '/tmp/data' : path.join(process.cwd(), 'data');

let dbInstance: any = null;

export function getDb() {
  if (!dbInstance) {
    if (!fs.existsSync(dbDir)) {
      try {
        fs.mkdirSync(dbDir, { recursive: true });
      } catch (e) {
        // Ignore mkdir errors in restricted envs
      }
    }

    dbInstance = new Database(path.join(dbDir, 'tournament.db'));
    try {
      dbInstance.pragma('journal_mode = WAL');
    } catch (e) {}

    dbInstance.exec(`
      CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        gamertag TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        game TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS matches (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        player1_id INTEGER,
        player2_id INTEGER,
        winner_id INTEGER,
        round INTEGER NOT NULL,
        match_number INTEGER NOT NULL,
        FOREIGN KEY(player1_id) REFERENCES players(id),
        FOREIGN KEY(player2_id) REFERENCES players(id),
        FOREIGN KEY(winner_id) REFERENCES players(id)
      );

      CREATE TABLE IF NOT EXISTS payments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        stripe_session_id TEXT UNIQUE,
        customer_email TEXT,
        customer_name TEXT,
        amount_total INTEGER,
        currency TEXT,
        status TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }
  return dbInstance;
}

const db = new Proxy({} as any, {
  get(_target, prop) {
    const instance = getDb();
    const val = instance[prop];
    if (typeof val === 'function') {
      return val.bind(instance);
    }
    return val;
  }
});

export default db;
