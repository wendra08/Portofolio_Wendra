import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';

const baseURL = process.env.PORTFOLIO_URL || 'http://127.0.0.1:4321';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const errors = [];
await mkdir('test-results', { recursive: true });
try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => {
    if (response.status() >= 400)
      errors.push(`${response.status()} ${response.url()}`);
  });
  const response = await page.goto(baseURL, { waitUntil: 'networkidle' });
  assert.equal(response?.status(), 200);
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  assert.match(await page.title(), /Muhammad Wendra Suryananda/);
  const portrait = page.locator('.portrait-photo');
  await portrait.evaluate((img) => img.decode());
  assert.ok(
    await portrait.evaluate((img) => img.naturalWidth > 0),
    'Profile photo must load successfully',
  );
  assert.equal(
    await page.getByRole('button', { name: 'Download CV' }).isDisabled(),
    true,
  );
  assert.equal(await page.locator('.experience-row').count(), 3);
  assert.equal(await page.locator('#education .education-card').count(), 1);
  assert.equal(
    await page
      .locator('#education img[alt="Universitas Mulawarman logo"]')
      .count(),
    1,
  );
  assert.match(await page.locator('#education').innerText(), /Universitas Mulawarman/);
  assert.match(await page.locator('#education').innerText(), /2020 — 2024/);
  assert.match(await page.locator('#education').innerText(), /3\.93 \/ 4\.00/);
  assert.match(await page.locator('#experience').innerText(), /2026 — Present/);
  assert.match(await page.locator('#experience').innerText(), /PT Graha Prima Energy/);
  assert.equal(await page.locator('.project-card').count(), 4);
  assert.equal(await page.locator('.project-card .coming-soon').count(), 0);
  assert.equal(await page.locator('.skill-group li').count(), 13);
  assert.equal(await page.locator('.skill-group li svg').count(), 13);
  assert.equal(await page.locator('a[href="#"]').count(), 0);

  const pause = page.getByRole('button', { name: 'Pause animations' });
  await pause.click();
  assert.equal(
    await page
      .locator('.marquee-track')
      .evaluate((el) => getComputedStyle(el).animationPlayState),
    'paused',
  );
  await page.getByRole('button', { name: 'Resume animations' }).click();
  assert.equal(
    await page
      .locator('.marquee-track')
      .evaluate((el) => getComputedStyle(el).animationPlayState),
    'running',
  );
  await page.locator('.marquee').focus();
  assert.equal(
    await page
      .locator('.marquee-track')
      .evaluate((el) => getComputedStyle(el).animationPlayState),
    'paused',
  );
  await page.locator('.brand').first().focus();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(
    await page
      .locator('.marquee-track')
      .evaluate((el) => getComputedStyle(el).animationName),
    'none',
  );
  assert.equal(
    await page
      .getByRole('button', { name: 'Reduced motion enabled' })
      .isDisabled(),
    true,
  );
  await page.locator('.desktop-nav a[href="#experience"]').click();
  assert.equal(new URL(page.url()).hash, '#experience');
  await page.locator('.desktop-nav a[href="#education"]').click();
  assert.equal(new URL(page.url()).hash, '#education');
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  for (const width of [1440, 1024, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await portrait.scrollIntoViewIfNeeded();
    await portrait.evaluate((img) => img.decode());
    assert.ok(await portrait.isVisible(), `Profile photo visible at ${width}px`);
    const dimensions = await page.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      width: window.innerWidth,
    }));
    assert.ok(
      dimensions.scroll <= dimensions.width,
      `Horizontal overflow at ${width}px: ${JSON.stringify(dimensions)}`,
    );
  }
  await page.setViewportSize({ width: 390, height: 844 });
  const toggle = page.getByRole('button', { name: 'Open navigation' });
  await toggle.click();
  assert.equal(await page.locator('#mobile-navigation').isVisible(), true);
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#mobile-navigation').isVisible(), false);
  assert.equal(
    await toggle.evaluate((el) => document.activeElement === el),
    true,
  );
  await toggle.click();
  await page.locator('#mobile-navigation a[href="#achievements"]').click();
  assert.equal(new URL(page.url()).hash, '#achievements');
  assert.equal(await page.locator('#mobile-navigation').isVisible(), false);
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  const mobileAccessibility = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  assert.deepEqual(
    mobileAccessibility.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => n.target),
    })),
    [],
    'Mobile accessibility violations',
  );
  await page.screenshot({ path: 'test-results/mobile.png', fullPage: true });
  await page.setViewportSize({ width: 1440, height: 1000 });
  const desktopAccessibility = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  assert.deepEqual(
    desktopAccessibility.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => n.target),
    })),
    [],
    'Desktop accessibility violations',
  );
  await page.screenshot({ path: 'test-results/desktop.png', fullPage: true });
  await page.screenshot({ path: 'test-results/desktop-hero.png' });
  const noJS = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const staticPage = await noJS.newPage();
  await staticPage.goto(baseURL);
  assert.equal(await staticPage.locator('h1').isVisible(), true);
  await staticPage.locator('.portrait-photo').evaluate((img) => img.decode());
  assert.equal(await staticPage.locator('#achievements h2').isVisible(), true);
  await noJS.close();

  // Verify both published case studies through their home-page cards.
  const studies = [
    {
      name: 'procurement',
      title: 'Procurement and Payment Request Tracking',
      path: '/projects/procurement-payment-tracking/',
      stackRows: 7,
      original: 'admin-dashboard.jpg',
    },
    {
      name: 'sdm-system',
      title: 'SDM-System PT ITCI Kartika Utama',
      path: '/projects/sdm-system/',
      stackRows: 5,
      original: 'employee-detail.jpg',
    },
    {
      name: 'timesheet-system',
      title: 'Timesheet-System PT ITCI Kartika Utama',
      path: '/projects/timesheet-system/',
      stackRows: 6,
      original: 'dashboard.jpg',
    },
    {
      name: 'asset-management-system',
      title: 'Asset Management System PT ITCI Kartika Utama',
      path: '/projects/asset-management-system/',
      stackRows: 6,
      original: 'login.jpg',
    },
  ];
  for (const study of studies) {
    await page
      .locator('.project-card')
      .filter({ hasText: study.title })
      .getByRole('link', { name: 'Read case study' })
      .click();
    assert.equal(new URL(page.url()).pathname, study.path);
    assert.ok((await page.locator('h1').innerText()).includes(study.title));
    assert.equal(
      await page.locator('.stack-table tbody tr').count(),
      study.stackRows,
    );
    if (study.name === 'sdm-system') {
      assert.equal(await page.locator('.document-grid article').count(), 4);
      assert.match(
        await page.locator('.deployment-note').innerText(),
        /Synology NAS/,
      );
      assert.equal(await page.locator('ul.workflow').count(), 1);
    }
    for (const section of ['Problem', 'Solution', 'Results', 'Tech stack']) {
      await page
        .getByRole('navigation', { name: 'Case study sections' })
        .getByRole('link', { name: section })
        .click();
      const target = section.toLowerCase().replace(' ', '-');
      assert.equal(new URL(page.url()).hash, `#${target}`);
      assert.equal(await page.locator(`#${target} h2`).isVisible(), true);
    }
    for (const picture of await page.locator('.case-screenshot img').all()) {
      await picture.scrollIntoViewIfNeeded();
      await picture.evaluate((img) => img.decode());
    }
    const popupPromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Open original' }).first().click();
    const original = await popupPromise;
    await original.waitForLoadState();
    assert.ok(original.url().endsWith(study.original));
    await original.close();
    for (const width of [1440, 1024, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        true,
        `Case study overflow at ${width}px`,
      );
    }
    for (const [label, width] of [
      ['desktop', 1440],
      ['mobile', 390],
    ]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.evaluate(() => {
        document.activeElement?.blur();
        window.scrollTo(0, 0);
      });
      const accessibility = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      assert.deepEqual(
        accessibility.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
        [],
        `Case study ${label} accessibility`,
      );
      await page.screenshot({
        path: `test-results/${study.name}-${label}.png`,
        fullPage: true,
      });
    }
    await page.getByRole('link', { name: 'Back to portfolio' }).click();
    assert.equal(new URL(page.url()).hash, '#work');
  }
  assert.deepEqual(errors, [], 'Browser errors or failed resources');
  console.log(
    'PASS: home and case study layouts, 5 viewport sizes, navigation, project links, original screenshot access, animation controls, reduced motion, missing-CV state, 13 skill logos, WCAG A/AA scans, no-JavaScript content, and browser resources.',
  );
  console.log(
    'Screenshots: test-results/desktop.png, test-results/desktop-hero.png, test-results/mobile.png',
  );
} finally {
  await browser.close();
}
