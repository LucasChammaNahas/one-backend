const { pool } = require('../../Database/dbConfig');
const { validateProps } = require('./functions');
const { InternalDbError } = require('../../Errors/InternalDbError');

const setUserQuery = 'INSERT INTO users (email, password) VALUES ($1, $2)';

async function setUser(props) /*Void*/ {
  validateProps(props, arguments);
  const { email, password } = props;

  try {
    const params = [email, password];
    const { rows } = await pool.query(setUserQuery, params);
    if (rows.length === 0) return null;
    return rows[0];
  } catch (error) {
    console.log('--> setUser says: ', error);
    throw new InternalDbError(
      'setUser says: an error occured while accessing the database'
    );
  }
}

module.exports = { setUser, setUserQuery };
