import { test, expect } from '@playwright/test';

test('Complete Order Flow', async ({ browser }) => {

  // ======================================
  // Open Customer & Staff Browsers
  // ======================================

  const customer = await browser.newPage();
  const staff = await browser.newPage();

  // ======================================
  // CUSTOMER
  // ======================================

  await customer.goto('http://localhost:5173/customer');

  await expect(
    customer.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  console.log('Customer page opened');

  // Add Hazelnut Cold Coffee Large
  await customer
    .getByRole('button', { name: 'Add' })
    .nth(5)
    .click();

  console.log('Product added');

  // Open cart
  await customer
    .getByRole('button', { name: /Items/i })
    .click();

  await expect(
    customer.getByText('Your Cart')
  ).toBeVisible();

  console.log('Cart opened');

  // Pay at Counter
  await customer
    .getByRole('button', {
      name: 'Pay At Counter'
    })
    .click();

  console.log('Customer placed order');

  // ======================================
  // STAFF
  // ======================================

  await staff.goto('http://localhost:5173/login');

  await staff
    .getByPlaceholder('Username')
    .fill('staff1');

  await staff
    .getByPlaceholder('Password')
    .fill('staff123');

  await staff
    .getByRole('button', {
      name: /login/i
    })
    .click();

  console.log('Staff login completed');

  // Wait until redirected to /staff
  await expect(staff).toHaveURL(/staff/, {
    timeout: 15000,
  });

  console.log('Staff redirected to dashboard');

  // Give dashboard time to receive the order
  await staff.waitForTimeout(3000);

  // Wait for Confirm button
  await expect(
    staff
      .getByRole('button', { name: 'Confirm' })
      .first()
  ).toBeVisible({
    timeout: 15000,
  });

  console.log('Order received');

  // Confirm order
  await staff
    .getByRole('button', { name: 'Confirm' })
    .first()
    .click();

  console.log('Order confirmed');

  // ======================================
  // CUSTOMER BILL RECEIPT
  // ======================================

  await expect(
    customer.getByText('Bill Receipt')
  ).toBeVisible({
    timeout: 15000,
  });

  console.log('Bill Receipt Found');

  await expect(
    customer.getByText('TOKEN NUMBER')
  ).toBeVisible();

  console.log('Payment Confirmed Popup Found');

  // Pause for inspection
  await customer.pause();

});
