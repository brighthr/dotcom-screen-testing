import { test, expect } from "@chromatic-com/playwright";

const payrollFeatures = ["online-payroll", "outsourced-payroll"];

payrollFeatures.forEach((payrollFeature) => {
  test(`payroll feature page visual test | @payrollFeature | ${payrollFeature}`, async ({
    page,
  }) => {
    await page.goto(`/payroll-software/${payrollFeature}`);
    await page.getByRole("button", { name: "Accept all" }).click();
    await expect(page).toHaveScreenshot(`${payrollFeature}.png`, {
      fullPage: true,
    });
  });
});
