import { test, expect } from "@playwright/test";

test("homepage visual test | @homepage", async ({ page }) => {
  await page.goto("https://www.brighthr.com/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await expect(page).toHaveScreenshot("homepage.png", { fullPage: true });
});
