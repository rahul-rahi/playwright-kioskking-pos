import { test, expect } from '@playwright/test';

test('ST034 - Orders History', async ({ page }) => {

  // Login
  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Wait for staff page
  await page.waitForURL('**/staff');
// await page.pause();
  // Open Orders tab
  await page.getByRole('button', {
    name: 'Orders',
    exact: true
  }).click();

  // Verify at least one order exists
  await expect(
    page.locator('text=/TOKEN #\\d+/').first()
  ).toBeVisible();

  // Verify Total exists
  await expect(
    page.getByText('Total').first()
  ).toBeVisible();

  // Verify at least one price exists
  await expect(
    page.locator('text=/₹\\d+/').first()
  ).toBeVisible();

});
