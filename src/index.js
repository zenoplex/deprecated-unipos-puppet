// @flow
const puppeteer = require('puppeteer');
const R = require('ramda');
const { email, password } = require('./env');
const login = require('./pages/login');
const timeline = require('./pages/timeline');

const username = 'suzuki-y';
const point = 1;
const hashtag = 'test';

if (!email || !password) {
  throw new Error('Both EMAIL and PASSWORD are required.');
}

(async () => {
  // $FlowFixMe not sure why await returns Promise
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  R.pipeP(
    login.login({ email, password }),
    timeline.submit({ username, point, hashtag }),
    () => browser.close(),
  )(page);
})();
