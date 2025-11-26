import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // database: process.env.DB_NAME,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASS,
  connectionString: "postgresql://portfoliodb_25zy_user:y76KLHhUNw2RtLXdRMMjwgKTCpvONRpr@dpg-d4jgbkfgi27c739mfpsg-a.oregon-postgres.render.com/portfoliodb_25zy",
  ssl: {
    rejectUnauthorized: false, // Required by Render
  },
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1); // or try to reconnect logic
});

export default pool;
