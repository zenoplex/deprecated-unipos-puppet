// @flow
const puppeteer = require('puppeteer');
const R = require('ramda');
const { email, password } = require('./env');
const login = require('./pages/login');
const timeline = require('./pages/timeline');

if (!email || !password) {
  throw new Error('Both EMAIL and PASSWORD are required.');
}

type AppreciateOptions = {
  username: string,
  point?: number,
  hashtag?: string,
}

const appreciate: AppreciateOptions => Promise<void>
= async ({ username, point = 1, hashtag = 'thanks' }) => {
  // $FlowFixMe not sure why await returns Promise
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  return R.pipeP(
    login.login({ email, password }),
    timeline.submit({ username, point, hashtag }),
    () => browser.close(),
  )(page);
};

module.exports = {
  appreciate,
};
