const { pool } = require('../../Database/dbConfig');
const { cache } = require('../../Cache/cache');
const { validateProps } = require('./functions');
const { InternalDbError } = require('../../Errors/InternalDbError');
const { GET_USER_QUERY } = require('../../Database/queries');

async function getUser(props) /*null, obj*/ {
  validateProps(props, arguments);
  const { email } = props;

  try {
    if(cache.user !== undefined) {
      return cache
    }

    const params = [email];
    const { rows } = await pool.query(GET_USER_QUERY, params);

    if (rows.length === 0) {
      cache.user = null;
      return null;
    }
    
    cache.user = rows[0];
    return rows[0];
  } catch (error) {
    console.log('--> getUser says: ', error);
    throw new InternalDbError(
      'getUser says: an error occured while accessing the database'
    );
  }
}

module.exports = { getUser };
