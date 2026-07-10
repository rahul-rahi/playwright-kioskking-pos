import { test, expect } from '@playwright/test';

test('CT007 - Pay At Counter', async ({ page }) => {

  await page.goto('http://localhost:5173/customer');

  // Wait for products
  await expect(
    page.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  // Add first product
  await page.getByRole('button', { name: 'Add' }).nth(5).click();

  // Open cart
  await page.getByRole('button', { name: /Items/ }).click();

  // Cart page should open
  await expect(
    page.getByText('Your Cart')
  ).toBeVisible();

  // Click Pay At Counter
  await page.getByRole('button', { name: 'Pay At Counter' }).click();

});
