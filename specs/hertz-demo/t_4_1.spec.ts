import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§4.1 shared component library supports all brands with themes', async ({ page }) => {
  await open(page);
  await switchBrand(page, 'Hertz');
  await expect(page.getByTestId('brand-switcher')).toContainText(/hertz/i);
  
  await switchBrand(page, 'Dollar');
  await expect(page.getByTestId('brand-switcher')).toContainText(/dollar/i);
  
  await switchBrand(page, 'Thrifty');
  await expect(page.getByTestId('brand-switcher')).toContainText(/thrifty/i);
});
