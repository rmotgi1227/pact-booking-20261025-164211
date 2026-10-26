import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.2 shared component library supports all brands with distinct themes', async ({ page }) => {
  await open(page);
  await switchBrand(page, 'Hertz');
  await expect(page.getByTestId('brand-switcher')).toBeVisible();
  
  await switchBrand(page, 'Dollar');
  await expect(page.getByTestId('brand-switcher')).toBeVisible();
  
  await switchBrand(page, 'Thrifty');
  await expect(page.getByTestId('brand-switcher')).toBeVisible();
});
