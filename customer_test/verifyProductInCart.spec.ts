import { test, expect } from '@playwright/test';

test('CT006 - Verify Product In Cart', async ({ page }) => {

  await page.goto('http://localhost:5173/customer');

  // Wait for page
  await expect(
    page.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  // Add one product
  await page.getByRole('button', { name: 'Add' }).nth(5).click();

  // Open cart
  // await page.getByRole('button').filter({ hasText: '1' }).click();
await page.getByRole('button', { name: /Items/ }).click();

  // Verify cart page opens
  await expect(
    page.getByText('Your Cart')
  ).toBeVisible();
});
