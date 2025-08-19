import { test, expect } from "@chromatic-com/playwright";

test("integrations page visual test | @integrationsPage", async ({ page }) => {
  await page.goto("/integrations");
  await page.getByRole("button", { name: "Accept all" }).click();
  await expect(page).toHaveScreenshot("integrationsPage.png", {
    fullPage: true,
  });
});
