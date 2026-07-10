import { test, expect } from '@playwright/test';

test('CT003 - Click Cold Coffee Category', async ({ page }) => {

  // Open Customer Page
  await page.goto('http://localhost:5173/customer');

  // Wait until products load
  await expect(
    page.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  // Click Cold Coffee button
  await page.getByRole('button', { name: 'Cold Coffee' }).click();

  // Verify Cold Coffee button is selected
  await expect(
    page.getByRole('button', { name: 'Cold Coffee' })
  ).toBeVisible();

  // Verify Cold Coffee products
  await expect(
    page.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  await expect(
    page.getByText('Classic Cold Coffee Large')
  ).toBeVisible();

});
