import { test, expect } from '@playwright/test';

test('CT002 - Verify Category Buttons', async ({ page }) => {
  await page.goto('http://localhost:5173/customer');

  await expect(page.getByRole('button', { name: 'All' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cold Coffee' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Boba Drinks' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Shakes' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Mojito' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Ice Tea' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Momos' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Fries' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Burger' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Hot Coffee' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add Ons' })).toBeVisible();

  // await page.pause(); // remove this after verifying
});
