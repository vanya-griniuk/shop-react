const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'shop',
  user: 'ivangrinuk'
});

module.exports = pool;

