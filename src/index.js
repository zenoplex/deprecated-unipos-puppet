// @flow
const puppeteer = require('puppeteer');
const { email, password } = require('./env');

if (!email || !password) {
  throw new Error('Both EMAIL and PASSWORD are required.');
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://unipos.me/login');
  await page.focus('input[type="email"]');
  await page.type(email);
  await page.focus('input[type="password"]');
  await page.type(password);
  await page.click('button.login_btn');

  await page.waitForFunction('window.location.href === "https://unipos.me/all"');
  await page.waitForSelector('#post-form-input');
  await page.focus('#post-form-input');
  await page.type('@suzuki-y +1 #test', { delay: 100 });
  await page.click('.postBtn');

  browser.close();
})();
