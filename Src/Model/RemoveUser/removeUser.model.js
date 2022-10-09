const { pool } = require('../../Database/dbConfig');
const { validateProps } = require('./functions');
const { InternalDbError } = require('../../Errors/InternalDbError');
const { REMOVE_USER_QUERY } = require('../../Database/queries');

async function removeUser(props) /* Void */ {
  validateProps(props, arguments);
  const { email } = props;

  try {
    const params = [email];
    await pool.query(REMOVE_USER_QUERY, params);
  } catch (error) {
    console.log('--> removeUser says: ', error);
    throw new InternalDbError(
      'removeUser says: an error occured while accessing the database'
    );
  }
}

module.exports = { removeUser };
