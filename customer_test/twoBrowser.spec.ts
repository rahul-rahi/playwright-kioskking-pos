import { test, expect } from '@playwright/test';

test('Two Browser Test', async ({ browser }) => {

  const customerPage = await browser.newPage();
  const staffPage = await browser.newPage();

  // Customer page
  await customerPage.goto('http://localhost:5173/customer');

  // Staff login page
  await staffPage.goto('http://localhost:5173/login');

  // Login
  await staffPage.getByPlaceholder('Username').fill('staff1');
  await staffPage.getByPlaceholder('Password').fill('staff123');

  await staffPage.getByRole('button', { name: /login/i }).click();

  // Wait for dashboard
  // await expect(
    // staffPage.getByText('Pending Payments')
  // ).toBeVisible();
  console.log("Current URL:", staffPage.url());

await staffPage.screenshot({ path: "staff-page.png", fullPage: true });

await staffPage.pause();

  console.log('Staff login successful');

  // Pause
  await staffPage.pause();

});
