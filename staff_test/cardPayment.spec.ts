import { test, expect } from '@playwright/test';

test('ST024 - Card Payment', async ({ page }) => {

  // Login
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

  // Select Card payment
  await page.getByRole('button', { name: 'Card' }).click();

  // Complete Billing
  await page.getByRole('button', {
    name: 'Complete Billing'
  }).click();

  // Verify Current Bill becomes ₹0
  await expect(
    page.getByText('₹0').first()
  ).toBeVisible();
});
