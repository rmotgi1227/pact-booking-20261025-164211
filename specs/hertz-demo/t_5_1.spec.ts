import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§5.1 dark mode toggle exists and switches theme', async ({ page }) => {
  await open(page);
  const toggle = page.getByTestId('theme-toggle');
  await expect(toggle).toBeVisible();
  
  // Check initial theme is light
  await expect(page.locator('html')).not.toHaveAttribute('data-theme', 'dark');
  
  // Toggle to dark mode
  await toggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  
  // Toggle back to light mode
  await toggle.click();
  await expect(page.locator('html')).not.toHaveAttribute('data-theme', 'dark');
});
