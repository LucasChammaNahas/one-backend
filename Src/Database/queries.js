module.exports = {
  GET_USER_QUERY: 'SELECT * FROM users WHERE email = $1',
  SET_USER_QUERY: 'INSERT INTO users (email, password) VALUES ($1, $2)',
  REMOVE_USER_QUERY: 'DELETE FROM users WHERE email = $1;',
};
