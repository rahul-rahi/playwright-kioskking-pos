import { test, expect } from '@playwright/test';

test('ST035 - Deliver Order', async ({ page }) => {

  // ==========================
  // Login
  // ==========================
  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Wait until Staff page opens
  await page.waitForURL('**/staff');

  // ==========================
  // Select Burger Category
  // ==========================
  await page.getByRole('button', {
    name: 'Burger',
    exact: true
  }).click();

  // ==========================
  // Add Burger to Cart
  // ==========================
  await page.getByText('Classic Aloo Tikki Burger')
    .locator('../../../../..')
    .getByRole('button')
    .last()
    .click();

  // ==========================
  // Select Payment Method
  // ==========================
  await page.getByRole('button', {
    name: 'UPI'
  }).click();

  // ==========================
  // Complete Billing
  // ==========================
  await page.getByRole('button', {
    name: 'Complete Billing'
  }).click();

  // Wait for order to be created
  await page.waitForTimeout(2000);

  // ==========================
  // Open Orders Tab
  // ==========================
  await page.getByRole('button', {
    name: 'Orders',
    exact: true
  }).click();

  // ==========================
  // Click Burger Notification
  // (This opens Ready For Pickup)
  // ==========================
  await page.getByRole('button', {
    name: '🍔'
  }).click();

  // Wait a moment
  await page.waitForTimeout(1000);

  // ==========================
  // Verify Delivered button exists
  // ==========================
  await expect(
    page.getByRole('button', {
      name: 'Delivered'
    }).first()
  ).toBeVisible();

  // ==========================
  // Click Delivered
  // ==========================
  await page.getByRole('button', {
    name: 'Delivered'
  }).first().click();

  // Wait for update
  await page.waitForTimeout(2000);

  // ==========================
  // Return to Orders Tab
  // ==========================
  await page.getByRole('button', {
    name: 'Orders',
    exact: true
  }).click();

  // ==========================
  // Verify order is completed
  // ==========================
  await expect(
    page.getByText(/completed/i).first()
  ).toBeVisible();

});
