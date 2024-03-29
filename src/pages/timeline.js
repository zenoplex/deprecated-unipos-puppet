// @flow
import type { Page } from 'puppeteer';

type SubmitOptions = {
  username: string,
  point: number,
  hashtag?: string,
  message: string,
}

const submit: SubmitOptions => Page => Promise<Page>
= ({ username, point, hashtag, message }) => async (page) => {
  const hash = hashtag ? `#${hashtag}` : '';
  await page.waitForSelector('#post-form-input');
  await page.focus('#post-form-input');
  await page.type(`@${username} +${point} ${message} ${hash}`, { delay: 50 });
  await page.click('.postBtn');
  await page.waitForSelector('.postBtn[disabled]');
  await page.waitFor(5000);
  return page;
};

module.exports = {
  submit,
};
