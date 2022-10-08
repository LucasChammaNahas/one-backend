const GET_USER_QUERY = 'SELECT * FROM users WHERE email = $1';
const SET_USER_QUERY = 'INSERT INTO users (email, password) VALUES ($1, $2)';

module.exports = { GET_USER_QUERY, SET_USER_QUERY };
