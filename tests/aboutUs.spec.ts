import { test, expect } from "@playwright/test";

test(`resource page visual test | @aboutUs`, async ({ page }) => {
  await page.goto("/about-us");
  await page.getByRole("button", { name: "Accept all" }).click();
  await expect(page).toHaveScreenshot("aboutUs.png", { fullPage: true });
});
