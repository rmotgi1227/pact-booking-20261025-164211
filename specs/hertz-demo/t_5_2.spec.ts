import { test, expect } from '@playwright/test';
import { open, search, firstRowCount, expectFirstRowAtLeast, expectNoHorizontalOverflow, atViewports, bookFirstCar, switchBrand } from '../pact';

test('§5.2 dark mode preference is remembered and applied across all pages', async ({ page }) => {
  await open(page);
  const themeToggle = page.getByTestId('theme-toggle');
  await expect(themeToggle).toBeVisible();
  await themeToggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  
  await search(page);
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  
  await bookFirstCar(page);
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});
