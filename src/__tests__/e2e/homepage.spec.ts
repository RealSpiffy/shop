import { test, expect } from "@playwright/test";

test("should render heading", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Page has h1
  await expect(page.locator("h1")).toContainText("Real Spiffy Template");
});
