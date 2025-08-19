import { test, expect } from "@chromatic-com/playwright";

test(`our culture page visual test | @ourCulture`, async ({ page }) => {
  await page.goto("/about-us/our-culture");
  await page.getByRole("button", { name: "Accept all" }).click();
  await expect(page).toHaveScreenshot("ourCulture.png", { fullPage: true });
});
