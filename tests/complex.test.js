// complex.test.js

const { test, expect } = require('@playwright/test');

test('complex interaction test on CNN', async ({ page }) => {
  // Navigate to CNN homepage
  await page.goto('https://edition.cnn.com'); 

  // Wait for the page to load and assert the title
  await expect(page).toHaveTitle(/CNN/);

  // Wait for the "World" section link to be visible before clicking
  await page.waitForSelector('a[href^="https://edition.cnn.com/world"]');
  await page.click('a[href^="https://edition.cnn.com/world"]');

  // Wait for an element specific to the new page (example: an <h1> element)
  await page.waitForSelector('h1');  // Replace with a more specific element if needed

  // Verify the URL
  await expect(page).toHaveURL(/world/);
});
