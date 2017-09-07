// @flow
require('dotenv').config();

const { EMAIL, PASSWORD, PORT } = process.env;

const email = EMAIL || '';
const password = PASSWORD || '';
const port = PORT || 3000;

module.exports = {
  email,
  password,
  port,
};
