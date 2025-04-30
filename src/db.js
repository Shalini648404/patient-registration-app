import { PGlite } from '@electric-sql/pglite';

const db = new PGlite('idb://patients-db');

// Initialize the table
await db.exec(`
  CREATE TABLE IF NOT EXISTS patients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER,
    gender TEXT,
    contact TEXT
  );
`);

export default db;
