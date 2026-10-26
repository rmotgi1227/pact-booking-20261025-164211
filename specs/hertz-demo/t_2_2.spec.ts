import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§2.2 reservation confirmation shows confirmation number', async ({ page }) => {
  await search(page);
  await bookFirstCar(page);
  await expect(page.getByTestId('confirmation-banner')).toBeVisible();
  const confirmationNumber = await page.getByTestId('confirmation-banner').textContent();
  expect(confirmationNumber).toMatch(/\d{6,}/); // expects at least 6 digits
});
