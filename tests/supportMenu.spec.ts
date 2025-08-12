import { test, expect } from "@playwright/test";

test(`support menu visual test | @supportMenu`, async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name.includes("Mobile"),
    "Navbar hover tests not applicable on mobile"
  );
  await page.goto("/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByText("Resources").nth(1).hover();
  await page.getByRole("link", { name: "Support" }).nth(1).hover();
  await expect(page).toHaveScreenshot("supportMenu.png");
});
