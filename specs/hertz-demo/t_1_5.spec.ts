import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.5 result cards display daily price', async ({ page }) => {
  await search(page);
  await expectFirstRowAtLeast(page, 2);
  const firstCard = page.getByTestId('result-card').first();
  await expect(firstCard).toBeVisible();
  await expect(firstCard.getByText(/\$\d+/)).toBeVisible();
});
