import { test, expect } from '@playwright/test';

test('Ready Order Flow', async ({ browser }) => {

  // ==========================
  // Open Browsers
  // ==========================
  const customer = await browser.newPage();
  const staff = await browser.newPage();

  // ==========================
  // CUSTOMER PAGE
  // ==========================
  await customer.goto('http://localhost:5173/customer');

  await expect(
    customer.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  console.log('Customer page opened');

  // Add Product
  await customer
    .getByRole('button', { name: 'Add' })
    .nth(5)
    .click();

  console.log('Product added');

  // Open Cart
  await customer.getByRole('button', { name: /Items/i }).click();

  await expect(
    customer.getByText('Your Cart')
  ).toBeVisible();

  console.log('Cart opened');

  // Pay At Counter
  await customer.getByRole('button', {
    name: 'Pay At Counter'
  }).click();

  console.log('Customer placed order');

  // Waiting Screen
  await expect(
    customer.getByText('Waiting For Payment')
  ).toBeVisible();

  console.log('Customer waiting for payment');

  // ==========================
  // STAFF LOGIN
  // ==========================
  await staff.goto('http://localhost:5173/login');

  await staff.getByPlaceholder('Username').fill('staff1');

  await staff.getByPlaceholder('Password').fill('staff123');

  await staff.getByRole('button', {
    name: /login/i
  }).click();

  console.log('Staff login completed');

  // Wait until dashboard opens
  await expect(
    staff.getByRole('button', { name: 'POS' })
  ).toBeVisible({
    timeout: 15000
  });

  console.log('Staff dashboard opened');

  // ==========================
  // CLICK BELL
  // ==========================
  await staff.getByRole('button', {
    name: '🔔'
  }).click();

  console.log('Notification bell clicked');

  // Wait for Pending Payments
  await expect(
    staff.getByText('Pending Payments')
  ).toBeVisible({
    timeout: 15000
  });

  console.log('Pending Payments opened');

  // ==========================
  // CONFIRM ORDER
  // ==========================
  await expect(
    staff.getByRole('button', {
      name: 'Confirm'
    }).first()
  ).toBeVisible({
    timeout: 15000
  });

  console.log('Order received');

  await staff
    .getByRole('button', {
      name: 'Confirm'
    })
    .first()
    .click();

  console.log('Order confirmed');
  // Wait a little for the backend to update
await staff.waitForTimeout(2000);

// Pause here so we can inspect the page
await staff.pause();

  // ==========================
  // READY ORDER
  // ==========================
  await expect(
    staff.getByRole('button', {
      name: 'Ready'
    }).first()
  ).toBeVisible({
    timeout: 15000
  });

  console.log('Ready button found');

  await staff
    .getByRole('button', {
      name: 'Ready'
    })
    .first()
    .click();

  console.log('Order marked Ready');

  // ==========================
  // CUSTOMER RECEIVES READY STATUS
  // ==========================
  await expect(
    customer.getByText(/Ready/i)
  ).toBeVisible({
    timeout: 20000
  });

  console.log('Customer received Ready notification');

  await customer.pause();
});
