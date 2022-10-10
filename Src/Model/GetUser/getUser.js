const { pool } = require('../../Database/dbConfig');
const { validateProps } = require('./functions');
const { InternalDbError } = require('../../Errors/InternalDbError');
const { GET_USER_QUERY } = require('../../Database/queries');

async function getUser(props) /*null, obj*/ {
  validateProps(props, arguments);
  const { email } = props;

  try {
    const params = [email];
    const { rows } = await pool.query(GET_USER_QUERY, params);
    if (rows.length === 0) return null;
    return rows[0];
  } catch (error) {
    console.log('--> getUser says: ', error);
    throw new InternalDbError(
      'getUser says: an error occured while accessing the database'
    );
  }
}

module.exports = { getUser };
