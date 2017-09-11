// @flow
require('dotenv').config();

const { PORT } = process.env;

const port = PORT || 3000;

module.exports = {
  port,
};
