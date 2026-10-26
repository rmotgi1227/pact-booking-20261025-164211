import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.3 result cards show daily price', async ({ page }) => {
  await search(page);
  const cards = page.getByTestId('result-card');
  const n = await cards.count();
  expect(n).toBeGreaterThan(0);
  for (let i = 0; i < n; i++) {
    await expect(cards.nth(i).getByTestId('daily-price')).toBeVisible();
  }
});
