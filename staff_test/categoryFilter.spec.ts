import { test, expect } from '@playwright/test';

test('ST028 - Category Filter', async ({ page }) => {

  // Login
  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await page.waitForURL('**/staff');

  // -------------------------
  // Cold Coffee
  // -------------------------
  await page.getByRole('button', {
    name: 'Cold Coffee',
    exact: true
  }).click();

  await expect(
    page.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  // -------------------------
  // Burger
  // -------------------------
  await page.getByRole('button', {
    name: 'Burger',
    exact: true
  }).click();

  await expect(
    page.getByText(/Burger/i).first()
  ).toBeVisible();

  // -------------------------
  // Fries
  // -------------------------
  await page.getByRole('button', {
    name: 'Fries',
    exact: true
  }).click();

  await expect(
    page.getByText('Peri Peri Cheesy Fries Large')
  ).toBeVisible();

});
