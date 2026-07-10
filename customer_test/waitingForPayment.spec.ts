import { test, expect } from '@playwright/test';

test('CT008 - Waiting For Payment Screen', async ({ page }) => {

  await page.goto('http://localhost:5173/customer');

  // Wait for page
  await expect(
    page.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  // Add product
  await page.getByRole('button', { name: 'Add' }).nth(5).click();

  // Open cart
  await page.getByRole('button', { name: /Items/ }).click();

  // Click Pay At Counter
  await page.getByRole('button', { name: 'Pay At Counter' }).click();

  // Verify waiting screen
  await expect(
    page.getByText('Waiting For Payment')
  ).toBeVisible();

  // Verify countdown timer is visible
  await expect(
    page.locator('text=/\\d{2}:\\d{2}/')
  ).toBeVisible();

});
