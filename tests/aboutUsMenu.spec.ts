import { test, expect } from "@playwright/test";

test("about us menu visual test | @aboutUsMenu", async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name.includes("Mobile"),
    "Navbar hover tests not applicable on mobile"
  );
  await page.goto("/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByText("Resources").nth(1).hover();
  await page.getByRole("link", { name: "About us", exact: true }).hover();
  await expect(page).toHaveScreenshot("aboutUsMenu.png");
});
