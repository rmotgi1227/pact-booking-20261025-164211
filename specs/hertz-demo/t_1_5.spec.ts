import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.5 reservation confirmation shows confirmation number', async ({ page }) => {
  await search(page);
  await expectFirstRowAtLeast(page, 2);
  await bookFirstCar(page);
  await expect(page.getByTestId('confirmation-banner')).toBeVisible();
});
