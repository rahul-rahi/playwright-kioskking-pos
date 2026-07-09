import { test, expect } from '@playwright/test';

test('ST026 - Logout', async ({ page }) => {

  // Login
  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Wait until Staff page loads
  await page.waitForURL('**/staff');

  // Click profile button
  await page.getByRole('button', { name: '👤' }).click();

  // Click Logout
  await page.getByRole('button', { name: 'Logout' }).click();

  // Verify Login page
  await expect(
    page.getByRole('button', { name: 'LOGIN' })
  ).toBeVisible();
});
