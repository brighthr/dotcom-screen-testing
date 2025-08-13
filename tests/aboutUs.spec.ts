import { test, expect } from "@chromatic-com/playwright";

test(`about us page visual test | @aboutUs`, async ({ page }) => {
  await page.goto("/about-us");
  await page.getByRole("button", { name: "Accept all" }).click();
  await expect(page).toHaveScreenshot("aboutUs.png", { fullPage: true });
});
