import { test, expect } from '@playwright/test';

test('ST010 - Verify All Category Button', async ({ page }) => {

    // Login
    await page.goto('http://localhost:5173/login');

    await page.locator('input[placeholder="Enter Username"]').fill('staff1');
    await page.locator('input[placeholder="Enter password"]').fill('staff123');

    await page.getByRole('button', { name: 'LOGIN' }).click();

    // Wait for staff page
    await page.waitForURL(/staff/);

    // Find "All" button
     const allButton = page.getByRole('button', {
     name: 'All',
     exact: true
     });
    // Check visible
    await expect(allButton).toBeVisible();

    // Check enabled
    await expect(allButton).toBeEnabled();

    // Click it
    await allButton.click();

});
