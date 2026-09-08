import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';

const baseURL = process.env.PORTFOLIO_URL || 'http://127.0.0.1:4321';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const routes = [
  { path: '/', target: '#experience h2' },
  { path: '/projects/procurement-payment-tracking/', target: '#solution h2' },
  { path: '/projects/sdm-system/', target: '#solution h2' },
  { path: '/projects/timesheet-system/', target: '#solution h2' },
  { path: '/projects/asset-management-system/', target: '#solution h2' },
];
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({
      viewport: { width, height: 900 },
      reducedMotion: 'no-preference',
    });
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    const frame = () =>
      page.evaluate(
        () =>
          new Promise((resolve) =>
            requestAnimationFrame(() => requestAnimationFrame(resolve)),
          ),
      );
    for (const route of routes) {
      await page.goto(new URL(route.path, baseURL).href, {
        waitUntil: 'networkidle',
      });
      const target = page.locator(route.target);
      await target.waitFor();
      assert.notEqual(await target.getAttribute('data-scroll-reveal'), null);
      const scrollIn = async () => {
        await target.evaluate((el) =>
          el.scrollIntoView({ block: 'center', behavior: 'instant' }),
        );
      };
      const scrollOut = async () => {
        await page.evaluate(() =>
          window.scrollTo({ top: 0, behavior: 'instant' }),
        );
        await frame();
      };
      const running = () =>
        page.waitForFunction(
          (selector) => {
            const element = document.querySelector(selector);
            return element
              ?.getAnimations()
              .some((animation) => animation.playState === 'running');
          },
          route.target,
          { timeout: 3000 },
        );
      const settled = () =>
        page.waitForFunction(
          (selector) => {
            const element = document.querySelector(selector);
            return (
              element &&
              getComputedStyle(element).opacity === '1' &&
              getComputedStyle(element).transform === 'none'
            );
          },
          route.target,
          { timeout: 3000 },
        );

      await scrollIn();
      await running();
      await settled();
      assert.ok(
        await page
          .locator('.scroll-progress')
          .evaluate((el) => el.getBoundingClientRect().width > 0),
      );
      await scrollOut();
      await scrollIn();
      await running();
      // Pause during the entrance without scrolling to the control first.
      await page
        .getByRole('button', { name: 'Pause animations' })
        .evaluate((button) => { if (button instanceof HTMLButtonElement) button.click(); });
      await settled();
      assert.equal(await page.locator('.scroll-progress').isVisible(), false);
      await scrollOut();
      await scrollIn();
      await frame();
      assert.equal(
        await target.evaluate((el) =>
          el.getAnimations().some((a) => a.playState === 'running'),
        ),
        false,
      );
      await page
        .getByRole('button', { name: 'Resume animations' })
        .evaluate((button) => { if (button instanceof HTMLButtonElement) button.click(); });
      await scrollOut();
      await scrollIn();
      await running();
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await settled();
      assert.equal(
        await page
          .getByRole('button', { name: 'Reduced motion enabled' })
          .isDisabled(),
        true,
      );
      await scrollOut();
      await scrollIn();
      await frame();
      assert.equal(
        await target.evaluate((el) =>
          el.getAnimations().some((a) => a.playState === 'running'),
        ),
        false,
      );
      await page.emulateMedia({ reducedMotion: 'no-preference' });
    }
    assert.deepEqual(errors, []);
    await page.close();
  }
  const noJS = await browser.newContext({ javaScriptEnabled: false });
  for (const route of routes) {
    const page = await noJS.newPage();
    await page.goto(new URL(route.path, baseURL).href);
    assert.equal(
      await page
        .locator(route.target)
        .evaluate((el) => getComputedStyle(el).opacity),
      '1',
    );
    assert.equal(await page.locator('.scroll-progress').count(), 0);
    await page.close();
  }
  await noJS.close();
  console.log(
    'PASS: scroll entrance and replay, pause during motion, resume, live reduced-motion changes, progress indicator, desktop/mobile, all case study pages, and no-JavaScript visibility.',
  );
} finally {
  await browser.close();
}
