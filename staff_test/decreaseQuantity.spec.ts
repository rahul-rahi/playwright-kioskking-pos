import { test, expect } from '@playwright/test';

test('ST018 - Decrease Quantity', async ({ page }) => {

  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Open Cold Coffee
  await page.getByRole('button', {
    name: 'Cold Coffee',
    exact: true
  }).click();

  // Add one product
  await page
    .getByText('Caramel Cold Coffee Large')
    .locator('../../../../..')
    .getByRole('button')
    .last()
    .click();

  // Increase quantity to 2
  await page.locator('button.bg-green-600').first().click();

  // Click RED minus button
  await page.locator('button.bg-red-500').first().click();

  // Verify quantity becomes 1
  await expect(page.locator('text=1').first()).toBeVisible();

});
