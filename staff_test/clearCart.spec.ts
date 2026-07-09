import { test, expect } from '@playwright/test';

test('ST020 - Clear Cart', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await page.getByRole('button', {
    name: 'Cold Coffee',
    exact: true
  }).click();

  // Add first product
  await page
    .getByText('Caramel Cold Coffee Large')
    .locator('../../../../..')
    .getByRole('button')
    .last()
    .click();

  // Add second product
  await page
    .getByText('Classic Cold Coffee Large')
    .locator('../../../../..')
    .getByRole('button')
    .last()
    .click();

  // TODO: Click the Clear Cart button
  // await page.locator('YOUR_CLEAR_CART_BUTTON').click();

  // Verify bill is zero
  await expect(page.getByText('₹0')).toBeVisible();
});
