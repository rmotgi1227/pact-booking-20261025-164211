import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.1 booking flow delivers email receipt', async ({ page }) => {
  await search(page);
  await expectFirstRowAtLeast(page, 2);
  await bookFirstCar(page);
  await expect(page.getByTestId('confirmation-banner')).toBeVisible();
});
