import { test, expect } from '@playwright/test';

test('ST008 - Open Staff Page', async ({ page }) => {

  // Open Login Page
  await page.goto('http://localhost:5173/login');

  // Login
  await page.locator('input[placeholder="Enter Username"]').fill('staff2');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Wait until Staff page opens
  await page.waitForURL(/staff/);

  // Verify Staff page
  await expect(page).toHaveURL(/staff/);

});
