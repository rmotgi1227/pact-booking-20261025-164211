import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.4 launch planning shows December 2017 target', async ({ page }) => {
  await search(page);
  await expectFirstRowAtLeast(page, 2);
  await bookFirstCar(page);
  const confirmation = page.getByTestId('confirmation-banner');
  await expect(confirmation).toBeVisible();
  const text = await confirmation.textContent();
  expect(text.toLowerCase()).toContain('december 2017');
});
