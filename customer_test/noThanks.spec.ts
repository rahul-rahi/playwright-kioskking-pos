import { test, expect } from '@playwright/test';

test('CT015 - No Thanks Button', async ({ browser }) => {

  const customer = await browser.newPage();
  const staff = await browser.newPage();

  // ==========================
  // CUSTOMER
  // ==========================
  await customer.goto('http://localhost:5173/customer');

  await customer
    .getByRole('button', { name: 'Add' })
    .first()
    .click();

  console.log('Product added');

  await customer.getByRole('button', { name: /Items/i }).click();

  console.log('Cart opened');

  await customer.getByRole('button', {
    name: 'Pay At Counter'
  }).click();

  console.log('Order placed');

  await expect(
    customer.getByText('Waiting For Payment')
  ).toBeVisible();

  console.log('Waiting screen found');

  // ==========================
  // STAFF LOGIN
  // ==========================
  await staff.goto('http://localhost:5173/login');

  await staff.getByPlaceholder('Username').fill('staff1');
  await staff.getByPlaceholder('Password').fill('staff123');

  await staff.getByRole('button', {
    name: /login/i
  }).click();

  await expect(
    staff.getByRole('button', {
      name: 'POS'
    })
  ).toBeVisible();

  console.log('Staff dashboard opened');

  // Open Pending Payments
  await staff.getByRole('button', {
    name: '🔔'
  }).click();

  console.log('Pending Payments opened');

  // Confirm Order
  await staff.getByRole('button', {
    name: 'Confirm'
  }).first().click();

  console.log('Order confirmed');

  // ==========================
  // BILL RECEIPT
  // ==========================
  await expect(
    customer.getByText('Bill Receipt')
  ).toBeVisible({
    timeout: 20000
  });

  console.log('Bill Receipt Found');

  // Click Continue
  await customer.getByRole('button', {
    name: 'Continue'
  }).click();

  console.log('Continue button clicked');

  // ==========================
  // PAYMENT CONFIRMED
  // ==========================
  await expect(
    customer.getByText('Payment Confirmed')
  ).toBeVisible({
    timeout: 20000
  });

  console.log('Payment Confirmed popup found');

  // Click No Thanks
  await customer.getByRole('button', {
    name: 'No Thanks'
  }).click();

  console.log('No Thanks clicked');

  // Popup should disappear
  await expect(
    customer.getByText('Payment Confirmed')
  ).not.toBeVisible();

  console.log('Popup closed');
await expect(
  customer.getByRole('button', { name: 'All' })
).toBeVisible();

console.log('Customer returned to menu');
  // ==========================
  // PAUSE HERE
  // ==========================
  await customer.pause();

});
