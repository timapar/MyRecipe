const { Pool } = require('pg');

module.exports.pool = new Pool({
  user: 'tim',
  host: 'localhost',
  database: 'mvp',
  password: 'password',
  port: 5432,
});
