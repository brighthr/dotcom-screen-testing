import { test, expect } from "@chromatic-com/playwright";

test("pricing visual test | @pricing", async ({ page }) => {
  await page.goto("/pricing");
  await page.getByRole("button", { name: "Accept all" }).click();
  await expect(page).toHaveScreenshot("pricing.png", { fullPage: true });
});
