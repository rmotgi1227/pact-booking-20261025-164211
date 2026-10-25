import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.2 end to end flow works', async ({ page }) => {
  await search(page);
  await expectFirstRowAtLeast(page, 2);
  await bookFirstCar(page);
});
