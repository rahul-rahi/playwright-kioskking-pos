import { test, expect } from '@playwright/test';

test('ST034 - Billing History', async ({ page }) => {

  // Login
  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');

  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Open Billing History
  await page.getByRole('button', {
    name: 'Billing History'
  }).click();

  // Verify page heading
  await expect(
    page.getByRole('heading', {
      name: 'Billing History'
    })
  ).toBeVisible();

});
