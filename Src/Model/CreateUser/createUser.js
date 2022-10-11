const { pool } = require('../../Database/dbConfig');
const { cache } = require('../../Cache/cache');
const { validateProps } = require('./functions');
const { InternalDbError } = require('../../Errors/InternalDbError');
const { CREATE_USER_QUERY } = require('../../Database/queries');

async function createUser(props) /* Void */ {
  validateProps(props, arguments);
  const { email, password } = props;

  try {
    const params = [email, password];
    await pool.query(CREATE_USER_QUERY, params);
    cache.user = { email, password };
  } catch (error) {
    console.log('--> createUser says: ', error);
    throw new InternalDbError(
      'createUser says: an error occured while accessing the database'
    );
  }
}

module.exports = { createUser };
