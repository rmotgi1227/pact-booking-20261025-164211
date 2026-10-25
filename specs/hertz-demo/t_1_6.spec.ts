import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.6 booking shows itemized receipt', async ({ page }) => {
  await search(page);
  await expectFirstRowAtLeast(page, 2);
  await bookFirstCar(page);
  await expect(page.getByTestId('confirmation-banner')).toBeVisible();
  const receiptItems = page.getByTestId('confirmation-banner').getByRole('listitem');
  const itemCount = await receiptItems.count();
  expect(itemCount).toBeGreaterThan(0);
  let hasBaseRate = false;
  let hasTaxes = false;
  let hasFees = false;
  for (let i = 0; i < itemCount; i++) {
    const itemText = await receiptItems.nth(i).textContent();
    if (itemText?.includes('base rate')) hasBaseRate = true;
    if (itemText?.includes('taxes')) hasTaxes = true;
    if (itemText?.includes('fees')) hasFees = true;
  }
  expect(hasBaseRate).toBe(true);
  expect(hasTaxes).toBe(true);
  expect(hasFees).toBe(true);
});
