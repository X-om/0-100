const { Client } = require('pg');

const client = new Client({
  user: 'om',
  host: 'localhost',
  database: 'user',
  password: 'mypassword',
  port: 5431,
});

async function run() {
  try {
    await client.connect();
    console.log('✅ Connected to PostgreSQL');

    const res = await client.query('SELECT NOW()');
    console.log('🕒 Current time from DB:', res.rows[0]);
  } catch (err) {
    console.error('❌ Connection or query failed:', err.message);
  } finally {
    await client.end();
  }
}

run();
