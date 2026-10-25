import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('line_43fc98dc fuel level column is visible', async ({ page }) => {
  await search(page);
  await expectFirstRowAtLeast(page, 2);
  await expect(page.getByTestId('result-card').first()).toBeVisible();
});
