import { test, expect } from '@playwright/test';

test('CT001 - Customer Page Loads', async ({ page }) => {

  await page.goto('http://localhost:5173/customer');

  await expect(page).toHaveURL(/customer/);

  await expect(
    page.getByText('KIOSKKING')
  ).toBeVisible();
  await page.pause();
});
