import { test, expect } from '@playwright/test';

test('ST016 - Verify Cart Total', async ({ page }) => {

  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await page.waitForURL(/staff/);

  await page.getByRole('button', {
    name: 'Cold Coffee',
    exact: true
  }).click();

  await page
    .getByText('Caramel Cold Coffee Large')
    .locator('../../../../..')
    .getByRole('button')
    .last()
    .click();

  await expect(
    page.getByText('₹200')
  ).toBeVisible();

});
