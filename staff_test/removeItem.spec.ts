import { test, expect } from '@playwright/test';

test('ST019 - Remove Item from Cart', async ({ page }) => {

  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await page.getByRole('button', {
    name: 'Cold Coffee',
    exact: true
  }).click();

  // Add one item
  await page
    .getByText('Caramel Cold Coffee Large')
    .locator('../../../../..')
    .getByRole('button')
    .last()
    .click();

  // Click RED minus button
  await page.locator('button.bg-red-500').first().click();

  // Wait for the cart to update
  await expect(page.getByText('₹0')).toBeVisible();
});
