import { test, expect } from '@playwright/test';

test('CT009 - Verify Payment Confirmed Popup', async ({ page }) => {

  await page.goto('http://localhost:5173/customer');

  // Product loaded
  await expect(
    page.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  // Add product
  await page.getByRole('button', { name: 'Add' }).nth(5).click();

  // Open cart
  await page.getByRole('button', { name: /Items/ }).click();

  // Cart page
  await expect(
    page.getByText('Your Cart')
  ).toBeVisible();

  // Pay at counter
  await page.getByRole('button', { name: 'Pay At Counter' }).click();

  console.log('Waiting for staff confirmation...');
  await page.pause();

  // Bill receipt
  await expect(
    page.getByText('Bill Receipt')
  ).toBeVisible();

  console.log('Bill Receipt Found');

  // Continue
  await page.getByRole('button', { name: 'Continue' }).click();

  // Payment confirmed popup
  await expect(
    page.getByText('Payment Confirmed')
  ).toBeVisible();

  console.log('Payment Confirmed Popup Found');

});
