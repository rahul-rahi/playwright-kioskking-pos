import { test, expect } from '@playwright/test';

test('CT010 - Click Play Game', async ({ page }) => {

  await page.goto('http://localhost:5173/customer');

  // Wait until payment is confirmed
  await expect(
    page.getByText('Payment Confirmed')
  ).toBeVisible({ timeout: 60000 });

  // Click Play Game
  await page.getByRole('button', { name: 'Play Game' }).click();

  // Verify Game page opens
  await expect(
    page.getByText('Catch The Momos')
  ).toBeVisible();

});
