import { test, expect } from '@playwright/test';

test('ST042 - Token Number Increment', async ({ page }) => {

  // Login
  await page.goto('http://localhost:5173/login');

  await page.locator('input[placeholder="Enter Username"]').fill('staff1');
  await page.locator('input[placeholder="Enter password"]').fill('staff123');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await page.waitForURL('**/staff');

  // Open Orders tab
  await page.getByRole('button', {
    name: 'Orders',
    exact: true
  }).click();

  // Read current latest token
  const oldTokenText = await page.locator('text=/TOKEN #\\d+/').first().textContent();

  const oldToken = Number(oldTokenText?.match(/\d+/)?.[0]);

  // Back to POS
  await page.getByRole('button', {
    name: 'POS',
    exact: true
  }).click();

  // Select Burger category
  await page.getByRole('button', {
    name: 'Burger',
    exact: true
  }).click();

  // Add Burger
  await page.getByText('Classic Aloo Tikki Burger')
    .locator('../../../../..')
    .getByRole('button')
    .last()
    .click();

  // Select UPI
  await page.getByRole('button', {
    name: 'UPI'
  }).click();

  // Complete Billing
  await page.getByRole('button', {
    name: 'Complete Billing'
  }).click();

  // Wait for order creation
  await page.waitForTimeout(2000);

  // Open Orders
  await page.getByRole('button', {
    name: 'Orders',
    exact: true
  }).click();

  // Read new token
  const newTokenText = await page.locator('text=/TOKEN #\\d+/').first().textContent();

  const newToken = Number(newTokenText?.match(/\d+/)?.[0]);

  // Verify token incremented by 1
  expect(newToken).toBe(oldToken + 1);

});
