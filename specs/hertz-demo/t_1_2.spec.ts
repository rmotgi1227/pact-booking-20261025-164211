import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.2 launch plan shows milestones for December 2017', async ({ page }) => {
  await search(page);
  await expectFirstRowAtLeast(page, 2);
  await bookFirstCar(page);
  const confirmation = page.getByTestId('confirmation-banner');
  await expect(confirmation).toBeVisible();
  const text = await confirmation.textContent();
  expect(text.toLowerCase()).toContain('december');
  expect(text.toLowerCase()).toContain('2017');
});
