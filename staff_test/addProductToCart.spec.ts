import { test, expect } from '@playwright/test';

test('ST014 - Add Product To Cart', async ({ page }) => {

  // Login
  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await page.waitForURL(/staff/);

  // Open Cold Coffee
  await page.getByRole('button', {
    name: 'Cold Coffee',
    exact: true
  }).click();

  // Click + button for Caramel Cold Coffee Large
  await page
  .getByText('Caramel Cold Coffee Large')
  .locator('../../..')
  .getByRole('button')
  .last()
  .click();

  // Verify product added to bill
  await expect(
    page.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  // Verify amount changed
  await expect(
    page.getByText('₹200')
  ).toBeVisible();
// Pause here
//await page.waitForTimeout(100);
await page.pause();
});

