import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000');
await page.waitForTimeout(4000);
await page.screenshot({ path: '/tmp/gj-1.png' });

const scrolls = [1000, 2000, 3200, 4500, 5800, 7200, 8800, 10400, 12000, 13500];
for (let i = 0; i < scrolls.length; i++) {
  await page.evaluate(y => window.scrollTo(0, y), scrolls[i]);
  await page.waitForTimeout(600);
  await page.screenshot({ path: `/tmp/gj-${i+2}.png` });
}
await browser.close();
console.log('Done');
