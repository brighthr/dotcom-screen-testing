import { test, expect } from "@playwright/test";

test(`resource page visual test | @leadersInTech | `, async ({ page }) => {
  await page.goto("/leaders-in-tech");
  await page.getByRole("button", { name: "Accept all" }).click();
  await expect(page).toHaveScreenshot(`leadersInTech.png`, {
    fullPage: true,
    mask: [page.locator("#customer-reviews div")],
  });
});
