import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.6 emailed receipts show itemized details', async ({ page }) => {
  await search(page);
  await bookFirstCar(page);
  const receipt = page.getByTestId('confirmation-banner');
  await expect(receipt).toBeVisible();
  await expect(receipt.getByText(/base rate/i)).toBeVisible();
  await expect(receipt.getByText(/taxes/i)).toBeVisible();
  await expect(receipt.getByText(/fees/i)).toBeVisible();
});
