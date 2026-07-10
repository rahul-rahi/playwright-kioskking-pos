import { test, expect } from '@playwright/test';

test('CT005 - Open Cart', async ({ page }) => {

  await page.goto('http://localhost:5173/customer');

  // Add one product
  await page.getByRole('button', { name: 'Add' }).nth(4).click();

  // Click cart badge (shows "1")
  await page.getByRole('button', { name: '1', exact: true }).click();

  // Verify cart page opens
  await expect(page.getByText('Your Cart')).toBeVisible();

});
