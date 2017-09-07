// @flow

type SubmitOptions = {
  username: string,
  point?: number,
  hashtag?: string,
}

const submit: SubmitOptions => Object => Promise<Object>
= ({ username, point = 1, hashtag = '' }) => async (page) => {
  await page.waitForSelector('#post-form-input');
  await page.focus('#post-form-input');
  await page.type(`@${username} +${point} #${hashtag}`, { delay: 100 });
  await page.click('.postBtn');
  await page.waitForSelector('.postBtn[disabled]');
  return page;
};

module.exports = {
  submit,
};
