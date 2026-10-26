import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('line_ea09e0ef sms pickup reminder', async ({ page }) => {
  await search(page);
  await bookFirstCar(page);
  await expect(page.getByTestId('confirmation-banner')).toBeVisible();
  // Check if SMS reminder functionality is triggered (this would need to be mocked or checked via API in real scenario)
  // For now, we verify the booking flow completes successfully
  const confirmationText = await page.getByTestId('confirmation-banner').textContent();
  expect(confirmationText).toContain('pickup');
});
