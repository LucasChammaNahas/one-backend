const { pool } = require('../../Database/dbConfig');
const { validateProps } = require('./functions');

function getUserByEmail(props) {
  validateProps(props, arguments);
  const { email } = props;

  pool.query('SELECT * FROM users WHERE email = $1', [email], (err, res) => {
    console.log('--> res', res.rows);
  });
}

module.exports = { getUserByEmail };
