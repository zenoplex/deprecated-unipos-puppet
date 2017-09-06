// @flow
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://unipos.me/login');
  await page.focus('input[type="email"]');
  await page.type('test');

  browser.close();
})();
