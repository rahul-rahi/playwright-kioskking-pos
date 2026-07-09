import { test, expect } from '@playwright/test';

test('ST011 - Verify Category Buttons', async ({ page }) => {

  // Login
  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await page.waitForURL(/staff/);

  // Verify Categories

  await expect(page.getByRole('button', { name: 'Cold Coffee', exact: true })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Boba Drinks', exact: true })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Shakes', exact: true })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Mojito', exact: true })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Ice Tea', exact: true })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Momos', exact: true })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Fries', exact: true })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Burger', exact: true })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Hot Coffee', exact: true })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Add Ons', exact: true })).toBeVisible();

});
