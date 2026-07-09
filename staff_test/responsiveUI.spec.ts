import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Desktop', width: 1920, height: 1080 },
  { name: 'Laptop', width: 1366, height: 768 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Mobile', width: 375, height: 667 },
];

for (const viewport of viewports) {
  test(`ST036 - Responsive UI (${viewport.name})`, async ({ page }) => {

    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height
    });

    await page.goto('http://localhost:5173/login');

    // Login
    await page.locator('input[placeholder="Enter Username"]').fill('staff1');
    await page.locator('input[placeholder="Enter password"]').fill('staff123');
    await page.getByRole('button', { name: 'LOGIN' }).click();

    await page.waitForURL('**/staff');

    // Verify important UI elements
    await expect(page.getByText('KIOSKKING POS')).toBeVisible();
    await expect(page.getByRole('button', { name: 'POS' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Orders' })).toBeVisible();
    await expect(page.getByText('Current Bill')).toBeVisible();
  });
}
