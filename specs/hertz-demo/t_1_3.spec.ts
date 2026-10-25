import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.3 supports Hertz, Dollar, and Thrifty brands', async ({ page }) => {
  await open(page);
  await switchBrand(page, 'Hertz');
  await search(page);
  await expectFirstRowAtLeast(page, 2);
  
  await switchBrand(page, 'Dollar');
  await search(page);
  await expectFirstRowAtLeast(page, 2);
  
  await switchBrand(page, 'Thrifty');
  await search(page);
  await expectFirstRowAtLeast(page, 2);
});
