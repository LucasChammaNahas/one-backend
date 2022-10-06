const { pool } = require('../../Database/dbConfig');
const { validateProps } = require('./functions');
const { InternalDbError } = require('../../Errors/InternalDbError');

const GET_USER_QUERY = 'SELECT * FROM users WHERE email = $1';

async function getUser(props) /*null, obj*/ {
  validateProps(props, arguments);
  const { email } = props;

  try {
    const params = [email];
    const { rows } = await pool.query(GET_USER_QUERY, params);
    // const rows = await pool.query(GET_USER_QUERY, params);
    console.log('--> rows', rows)
    // if (rows.length === 0) return null;
    // return rows[0];
  } catch (error) {
    // console.log('--> getUser says: ', error);
    throw new InternalDbError(
      'getUser says: an error occured while accessing the database'
    );
  }
}

module.exports = { getUser, GET_USER_QUERY };
