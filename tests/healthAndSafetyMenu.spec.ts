import { test, expect } from "@playwright/test";

test(`health and safety menu visual test | @healthAndSafetyMenu`, async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name.includes("Mobile"),
    "Navbar hover tests not applicable on mobile"
  );
  await page.goto("/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByText("Product").nth(1).hover();
  await page
    .getByText("Health and safety supportProtect your business and employees")
    .hover();
  await expect(page).toHaveScreenshot("healthAndSafety.png");
});
