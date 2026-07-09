import { test, expect } from '@playwright/test';

test('Valid Admin Login', async ({ page }) => {

  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill(' admin');

  await page.locator('input[placeholder="Enter password"]').fill('admin123');

  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await page.waitForTimeout(5000);

  await expect(page).toHaveURL(/portal/);

});
