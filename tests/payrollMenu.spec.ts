import { test, expect } from "@playwright/test";

test(`payroll menu visual test | @payrollMenu`, async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name.includes("Mobile"),
    "Navbar hover tests not applicable on mobile"
  );
  await page.goto("/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByText("Product").nth(1).hover();
  await page
    .getByRole("banner")
    .getByRole("link", { name: "Payroll software" })
    .hover();
  await expect(page).toHaveScreenshot("payroll.png");
});
