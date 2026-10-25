import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.8 dark mode support', async ({ page }) => {
  await open(page);
  await search(page);
  await expectFirstRowAtLeast(page, 2);
  await expectNoHorizontalOverflow(page);
});
