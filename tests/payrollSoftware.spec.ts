import { test, expect } from "@chromatic-com/playwright";

test(`payroll software page visual test | @payrollSoftware`, async ({
  page,
}) => {
  await page.goto("/payroll-software/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await expect(page).toHaveScreenshot("payrollSoftware.png", {
    fullPage: true,
  });
});
