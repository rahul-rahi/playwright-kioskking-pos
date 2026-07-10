import { test, expect } from '@playwright/test';

test('CT004 - Add Product To Cart', async ({ page }) => {

  await page.goto('http://localhost:5173/customer');

  await expect(
    page.getByText('Caramel Cold Coffee Large')
  ).toBeVisible();

  // Add one product
  await page.getByRole('button', { name: 'Add' }).nth(4).click();

  // Cart badge should become 1
  await expect(
    page.getByRole('button', { name: '1', exact: true })
  ).toBeVisible();

});
