import { test, expect } from "@chromatic-com/playwright";

test(`success centre page visual test | @successCentre`, async ({ page }) => {
  await page.goto("/help");
  await page.getByRole("button", { name: "Accept all" }).click();
  await expect(page).toHaveScreenshot("successCentre.png", { fullPage: true });
});
