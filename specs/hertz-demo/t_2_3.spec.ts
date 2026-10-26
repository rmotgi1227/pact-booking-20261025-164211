import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§2.3 emailed receipts itemize base rate, taxes, and fees', async ({ page }) => {
  await search(page);
  await bookFirstCar(page);
  const confirmation = page.getByTestId('confirmation-banner');
  await expect(confirmation).toBeVisible();
  const receiptItems = confirmation.locator('.receipt-item');
  await expect(receiptItems).toHaveCount(3);
  const itemTexts = await receiptItems.allTextContents();
  const lowerCaseItems = itemTexts.map(item => item.toLowerCase());
  expect(lowerCaseItems).toContain('base rate');
  expect(lowerCaseItems).toContain('taxes');
  expect(lowerCaseItems).toContain('fees');
});
