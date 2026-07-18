import { test, expect } from '@playwright/test';

test('CT017 - Pay At UPI', async ({ page }) => {

  await page.goto('http://localhost:5173/customer');

  // Wait for products
  await expect(
    page.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  console.log('Customer page opened');

  // Add first product
  await page.getByRole('button', { name: 'Add' }).nth(5).click();

  console.log('Product added');

  // Open cart
  await page.getByRole('button', { name: /Items/ }).click();

  console.log('Cart opened');

  // Cart page should open
  await expect(
    page.getByText('Your Cart')
  ).toBeVisible();

  console.log('Cart verified');

  // Click UPI button
  await page.getByRole('button', {
    name: 'UPI'
  }).click();

  console.log('UPI selected');

  // Verify Waiting For Payment page
  await expect(
    page.getByText('Waiting For Payment')
  ).toBeVisible({
    timeout: 10000
  });

  console.log('Waiting For Payment page found');

  // Verify instruction text
  await expect(
    page.getByText('Complete payment using any UPI app')
  ).toBeVisible();

  console.log('UPI instruction found');

  // Pause for inspection
  await page.pause();

});
