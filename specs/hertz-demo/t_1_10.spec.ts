import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§1.10 dark mode preference persists across sessions', async ({ page }) => {
  await open(page);
  const themeToggle = page.getByTestId('theme-toggle');
  await expect(themeToggle).toBeVisible();
  await themeToggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  
  // Simulate a new session by reloading the page
  await page.reload();
  
  // Check that the dark mode is still active
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});
