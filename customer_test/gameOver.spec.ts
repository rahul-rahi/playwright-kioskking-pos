import { test, expect } from '@playwright/test';
test.setTimeout(120000); // 2 minutes
test('Complete Order Flow', async ({ browser }) => {

  // ============================
  // Open two browser pages
  // ============================

  const customer = await browser.newPage();
  const staff = await browser.newPage();

  // ============================
  // CUSTOMER
  // ============================

  await customer.goto('http://localhost:5173/customer');

  await expect(
    customer.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  console.log('Customer page opened');

  // Add product
  await customer.getByRole('button', { name: 'Add' }).nth(5).click();

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

  // Waiting screen
  await expect(
    customer.getByText('Waiting For Payment')
  ).toBeVisible();

  console.log('Customer waiting for payment');



  // ============================
  // STAFF
  // ============================

  await staff.goto('http://localhost:5173/login');

  await staff.getByPlaceholder('Username').fill('staff1');

  await staff.getByPlaceholder('Password').fill('staff123');

  await staff.getByRole('button', {
    name: /login/i
  }).click();

  console.log('Staff login completed');

  // Wait for dashboard
  await staff.waitForLoadState('networkidle');

  console.log('Staff dashboard opened');



  // ============================
  // CLICK BELL
  // ============================

  await staff.locator('button').nth(0).click();

  console.log('Notification bell clicked');



  // ============================
  // WAIT FOR ORDER
  // ============================

  await expect(
    staff.getByText('Pending Payments')
  ).toBeVisible({
    timeout: 15000
  });

  console.log('Pending Payments opened');



  // Wait until Confirm button appears

  await expect(
    staff.getByRole('button', {
      name: 'Confirm'
    }).first()
  ).toBeVisible({
    timeout: 15000
  });

  console.log('Order received');



  // Confirm Order

  await staff.getByRole('button', {
    name: 'Confirm'
  }).first().click();

  console.log('Order confirmed');



  // ============================
  // CUSTOMER RECEIVES BILL
  // ============================

  await expect(
    customer.getByText('Bill Receipt')
  ).toBeVisible({
    timeout: 15000
  });

  console.log('Bill Receipt Found');



  await expect(
    customer.getByText('TOKEN NUMBER')
  ).toBeVisible();

  console.log('Payment Confirmed Popup Found');


// Click Continue
await customer.getByRole('button', {
  name: 'Continue'
}).click();

console.log('Continue button clicked');

// Wait for Payment Confirmed popup
await expect(
  customer.getByText('Payment Confirmed')
).toBeVisible({
  timeout: 15000
});

console.log('Payment Confirmed popup found');

// Click Play Game
await customer.getByRole('button', {
  name: 'Play Game'
}).click();

console.log('Play Game clicked');

// Verify Game page
await expect(
  customer.getByText('Catch The Momos')
).toBeVisible({
  timeout: 15000
});

console.log('Game page opened');
console.log('Game page opened');

// Click Start Game
await customer.getByRole('button', {
  name: 'Start Game'
}).click();

console.log('Start Game clicked');

// Verify timer is visible
await expect(
	customer.getByText('Time', { exact: true })
//  customer.getByText('TIME')
).toBeVisible();

console.log('Timer found');

// Verify score is visible
await expect(
	customer.getByText('Score', { exact: true })
  // customer.getByText('SCORE')
).toBeVisible();

console.log('Score found');
// Wait until the game finishes
console.log('Waiting for Game Over...');

// Wait 35 seconds (adjust if your game duration is different)
await customer.waitForTimeout(35000);

// Verify Game Over screen
await expect(
  customer.getByText('Game Over')
).toBeVisible({
  timeout: 5000
});

console.log('Game Over screen found');

// Pause for inspection
await customer.pause();


});
