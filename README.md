# Playwright Automation - KIOSKKING POS

## Project Overview

This project contains Playwright automation test cases for the KIOSKKING POS application.

## Technologies

- Playwright
- TypeScript
- Node.js

## Test Cases

### Login
- Wrong Username
- Wrong Password
- Empty Username
- Empty Password
- Leading Spaces
- Trailing Spaces

### Staff Page
- Add Product To Cart
- Remove Item
- Increase Quantity
- Decrease Quantity
- Clear Cart
- Category Filter
- All Categories
- Category Buttons
- Cart Total
- Card Payment
- Cash Payment
- UPI Payment
- Split Payment
- Complete Billing
- Orders History
- Deliver Order
- Responsive UI
- Token Number Increment
- Cold Coffee Products

## Run all tests

```bash
npx playwright test
```

## Run one test

```bash
npx playwright test staff_test/deliverOrder.spec.ts --headed
```

## Author

Rahul Rai
