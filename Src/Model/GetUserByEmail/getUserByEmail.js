const { pool } = require('../../Database/dbConfig');
const { validateProps } = require('./functions');
const {}

async function getUserByEmail(props) {
  validateProps(props, arguments);
  const { email } = props;

  const query = 'SELECT * FROM users WHERE email = $1';
  const params = [email];
  const { rows } = await pool.query(query, params);

  if (rows.length === 0) return null;
  return rows[0];
}

module.exports = { getUserByEmail };
