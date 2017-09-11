// @flow
require('dotenv').config();

const { AUTH, PORT } = process.env;

// AUTH expect foo:bar
const auth = AUTH ? AUTH.split(':') : undefined;
const port = PORT || 3000;

module.exports = {
  auth,
  port,
};
