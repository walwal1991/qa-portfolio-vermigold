import { test, expect } from '@playwright/test';

test('home page loads with the correct title', async ({ page }) => {
  await page.goto('https://vermigolddz.com/');
  await expect(page).toHaveTitle('متجر سماد الديدان');
});