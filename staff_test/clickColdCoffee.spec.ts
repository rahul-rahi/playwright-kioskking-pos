import { test, expect } from '@playwright/test';

test('ST012 - Click Cold Coffee Category', async ({ page }) => {

  // Login
  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await page.waitForURL(/staff/);

  // Wait so you can see the page
  await page.waitForTimeout(3000);

  // Click Cold Coffee
  await page.getByRole('button', {
    name: 'Cold Coffee',
    exact: true
  }).click();

  console.log('Cold Coffee category clicked.');

  // Keep browser open
  await page.waitForTimeout(5000);

});
