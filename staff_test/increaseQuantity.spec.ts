import { test, expect } from '@playwright/test';

test('ST017 - Increase Quantity', async ({ page }) => {

  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await page.getByRole('button', {
    name: 'Cold Coffee',
    exact: true
  }).click();

  // Add product
await page
  .getByText('Caramel Cold Coffee Large')
  .locator('../../../../..')
  .getByRole('button')
  .last()
  .click();

// Increase quantity
  await page
  .locator('button.bg-green-600')
  .first()
  .click();

// Verify quantity
await expect(page.locator('text=2').first()).toBeVisible();
 // await page.waitForURL(/staff/);
   // await page.pause(); // Pause here while debugging
 //   await page.waitForTimeout(100);

// Click green + in cart
// await page.locator('YOUR_GREEN_PLUS_LOCATOR').click();

// Verify quantity is 2
// await expect(page.getByText('2', { exact: true })).toBeVisible();
  // TODO:
  // Click the GREEN + button in the Current Bill
  // Verify quantity becomes 2

});
