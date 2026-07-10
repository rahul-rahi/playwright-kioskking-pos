import { test, expect } from '@playwright/test';

test('CT009 - Verify Payment Confirmed Popup', async ({ page }) => {

  await page.goto('http://localhost:5173/customer');

  // Wait for page
  await expect(
    page.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  // Add product
  await page.getByRole('button', { name: 'Add' }).nth(5).click();

  // Open cart
  await page.getByRole('button', { name: /Items/ }).click();

  // Pay at counter
  await page.getByRole('button', { name: 'Pay At Counter' }).click();

  // Wait for staff to confirm payment
  await expect(
    page.getByText('Payment Confirmed')
  ).toBeVisible({ timeout: 60000 });

});
