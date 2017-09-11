// @flow
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { port } = require('./env');
const { appreciate } = require('./appreciate');

const app = express();
app
  .use(cors())
  .use(bodyParser.json())
  // $FlowFixMe post doesn't exist?
  .post('/', (req, res) => {
    appreciate(req.body)
      .then(() => {
        res.status(200);
        res.json({ status: 'success' });
      })
      .catch((error) => {
        res.status(422);
        res.json({ status: 'error', message: error });
      });
  })
  .listen(port, () => {
    console.log(`express server started at ${port}`);
  });
