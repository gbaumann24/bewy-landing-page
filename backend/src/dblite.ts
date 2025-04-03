import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// SQLite-Verbindung öffnen
export const initDB = async () => {
	const db = await open({
		filename: './contact.db',
		driver: sqlite3.Database,
	});

	await db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstname TEXT,
      lastname TEXT,
      email TEXT,
      phone TEXT,
      message TEXT,
      broschure BOOLEAN,
      created_at TEXT
    )
  `);

	return db;
};
