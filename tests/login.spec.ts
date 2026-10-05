import 'dotenv/config';
import { test, expect } from '@playwright/test';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://vermigolddz.com/');
    // The site opens in Arabic, so switch to English
    await page.getByRole('button', { name: '🇩🇿' }).click();
    await page.getByRole('button', { name: '🇬🇧 English' }).click();
    // Open the customer login page
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Customer Account Login or' }).click();
  });

  test('TC-005: login fails with a wrong password', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Email Address' }).fill('wrong.user@example.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('WrongPassword123');
    await page.locator('form').getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/customer\/login/);
    await expect(page.locator('form').getByRole('button', { name: 'Login' })).toBeVisible();
  });

  test('TC-004: login works with a valid account', async ({ page }) => {
    test.skip(!process.env.TEST_EMAIL, 'Needs TEST_EMAIL and TEST_PASSWORD in .env');

    await page.getByRole('textbox', { name: 'Email Address' }).fill(process.env.TEST_EMAIL!);
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.TEST_PASSWORD!);
    await page.locator('form').getByRole('button', { name: 'Login' }).click();

    // The login form disappears once we are logged in
    await expect(page.locator('form').getByRole('button', { name: 'Login' })).toBeHidden();
  });
});