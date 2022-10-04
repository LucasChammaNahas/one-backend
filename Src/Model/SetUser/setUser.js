const { pool } = require('../../Database/dbConfig');
const { validateProps } = require('./functions');
const { InternalDbError } = require('../../Errors/InternalDbError');

async function setUser(props) /*Void*/ {
  validateProps(props, arguments);
  const { email, password } = props;

  try {
    const query = 'SELECT * FROM users WHERE email = $1';
    const params = [email];
    const { rows } = await pool.query(query, params);
    if (rows.length === 0) return null;
    return rows[0];
  } catch (error) {
    console.log('--> setUser says: ', error);
    throw new InternalDbError(
      'setUser says: an error occured while accessing the database'
    );
  }
}

module.exports = { setUser };
