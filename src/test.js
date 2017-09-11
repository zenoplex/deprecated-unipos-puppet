// @flow
const puppeteer = require('puppeteer');

const test: () => Promise<void>
= async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', { waitUntil: 'networkidle' });
  await page.pdf({ path: 'hn.pdf', format: 'A4' });

  if (browser.close) browser.close();
};

module.exports = {
  test,
};
