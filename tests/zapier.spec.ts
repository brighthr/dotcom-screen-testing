import { test, expect } from "@chromatic-com/playwright";

test("zapier page visual test | @zapierPage", async ({ page }) => {
  await page.goto("/integrations/zapier");
  await page.getByRole("button", { name: "Accept all" }).click();
  await expect(page).toHaveScreenshot("zapier.png", {
    fullPage: true,
  });
});
