// @flow
require('dotenv').config();

const { EMAIL, PASSWORD } = process.env;

const email = EMAIL || '';
const password = PASSWORD || '';

module.exports = {
  email,
  password,
};
