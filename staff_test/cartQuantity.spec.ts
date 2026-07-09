import { test, expect } from '@playwright/test';

test('ST015 - Verify Cart Quantity', async ({ page }) => {

  // Login
  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await page.waitForURL(/staff/);

  // Open Cold Coffee
  await page.getByRole('button', {
    name: 'Cold Coffee',
    exact: true
  }).click();

  // Add product
  await page
    .getByText('Caramel Cold Coffee Large')
    .locator('../../../..')
    .getByRole('button')
    .last()
    .click();

  // Verify quantity is 1
  const quantity = page.locator('span.w-5');

console.log(await quantity.count());

 // await page.pause();

 await page.waitForTimeout(100);

});
