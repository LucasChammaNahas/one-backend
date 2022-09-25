require('dotenv').config();
const { Pool } = require('pg');

const isProduction = process.env.MODE_ENV === 'production';

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_DATABASE;

const localConnStr = `postgresql://${user}:${password}@${host}:${port}/${database}`;
const prodConnStr = process.env.DATABASE_URL;

connectionString = isProduction ? prodConnStr : localConnStr;

const pool = new Pool({
  connectionString,
});

module.exports = { pool };
