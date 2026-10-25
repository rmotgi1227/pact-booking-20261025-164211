import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.8 tablet compatibility', async ({ page }) => {
  await search(page);
  await atViewports(page, [[768, 1024], [1024, 768]], async () => {
    await expectNoHorizontalOverflow(page);
    await expectFirstRowAtLeast(page, 2);
  });
});
