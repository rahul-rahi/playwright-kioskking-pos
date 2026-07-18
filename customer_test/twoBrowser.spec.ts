import { test, expect } from '@playwright/test';

test('Two Browser Test', async ({ browser }) => {

  const customerPage = await browser.newPage();
  const staffPage = await browser.newPage();

  // Customer page
  await customerPage.goto('http://localhost:5173/customer');

  await expect(
    customerPage.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  console.log('Customer page opened');

  // Staff login
  await staffPage.goto('http://localhost:5173/login');

  await staffPage.getByPlaceholder('Username').fill('staff1');
  await staffPage.getByPlaceholder('Password').fill('staff123');

  await staffPage.getByRole('button', { name: /login/i }).click();

  // Give React time to finish navigation
  await staffPage.waitForTimeout(3000);

  console.log('Current URL:', staffPage.url());

  await staffPage.screenshot({
    path: 'staff-page.png',
    fullPage: true
  });

  // Pause here so we can inspect the page
  await staffPage.pause();

});
