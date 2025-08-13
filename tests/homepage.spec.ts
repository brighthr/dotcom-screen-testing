import { test, expect } from "@chromatic-com/playwright";

test("homepage visual test | @homepage", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await expect(page).toHaveScreenshot("homepage.png", { fullPage: true });
});
