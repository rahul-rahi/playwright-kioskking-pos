import { test, expect } from '@playwright/test';

test('ST013 - Verify Cold Coffee Products', async ({ page }) => {

  // Login
  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');

  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await page.waitForURL(/staff/);

  // Click Cold Coffee
  await page.getByRole('button', {
    name: 'Cold Coffee',
    exact: true
  }).click();

  await page.waitForTimeout(2000);

  // Verify products

  await expect(
  page.getByText('Caramel Cold Coffee Large').first()
).toBeVisible();

await expect(
  page.getByText('Classic Cold Coffee Large').first()
).toBeVisible();

await expect(
  page.getByText('Hazelnut Cold Coffee Large').first()
).toBeVisible();

await expect(
  page.getByText('Vanilla Cold Coffee Large').first()
).toBeVisible();

  await page.waitForTimeout(5000);

});
