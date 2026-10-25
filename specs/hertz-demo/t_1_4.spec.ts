import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.4 component library serves all brands with distinct themes', async ({ page }) => {
  await open(page);
  await switchBrand(page, 'Hertz');
  await switchBrand(page, 'Dollar');
  await switchBrand(page, 'Thrifty');
});
