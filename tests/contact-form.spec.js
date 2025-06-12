import { test, expect } from '@playwright/test';

test('Submit contact form', async ({ page }) => {
  await page.goto('https://example.com/contact');
  await page.fill('#name', 'Test User');
  await page.fill('#email', 'test@example.com');
  await page.fill('#message', 'Hello! This is a test.');
  await page.click('button[type="submit"]');
  await expect(page.locator('.success')).toBeVisible();
});