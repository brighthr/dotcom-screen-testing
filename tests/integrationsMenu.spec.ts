import { test, expect } from "@playwright/test";

test("integrations menu visual test | @integrationsMenu", async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name.includes("Mobile"),
    "Navbar hover tests not applicable on mobile"
  );
  await page.goto("/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByText("Resources").nth(1).hover();
  await page.getByRole("link", { name: "Integrations", exact: true }).hover();
  await expect(page).toHaveScreenshot("integrationsMenu.png");
});