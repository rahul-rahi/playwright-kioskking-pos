import { test, expect } from '@playwright/test';

test('ST022 - Cash Payment', async ({ page }) => {

  // Login
  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Open Cold Coffee category
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

  // Select Cash payment
  await page.getByRole('button', { name: 'Cash' }).click();

  // Complete Billing
  await page.getByRole('button', {
    name: 'Complete Billing'
  }).click();

  // Wait for success message
  await expect(
    page.getByText('Billing completed successfully')
  ).toBeVisible({ timeout: 10000 });

  // Verify Complete Billing button is disabled
  await expect(
    page.getByRole('button', { name: 'Complete Billing' })
  ).toBeDisabled();
});
