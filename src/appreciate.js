// @flow
const puppeteer = require('puppeteer');
const R = require('ramda');
const login = require('./pages/login');
const timeline = require('./pages/timeline');

type AppreciateOptions = {
  email: string,
  password: string,
  username: string,
  point?: number,
  hashtag?: string,
}

const appreciate: AppreciateOptions => Promise<void>
= async ({ email, password, username, point = 1, hashtag = 'thanks' }) => {
  if (!email || !password) {
    throw new Error('Both email and password are required.');
  }

  // $FlowFixMe not sure why await returns Promise
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
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
