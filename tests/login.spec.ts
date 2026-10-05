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
    await page.getByRole('textbox', { name: 'Email Address' }).fill('jhon@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('WrongPassword123');
    await page.locator('form').getByRole('button', { name: 'Login' }).click();

    // Still on the login page and not logged in
    await expect(page).toHaveURL(/customer\/login/);
    await expect(page.locator('form').getByRole('button', { name: 'Login' })).toBeVisible();
  });
});