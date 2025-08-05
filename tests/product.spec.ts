import { test, expect } from "@playwright/test";

const productPages = [
  "hr-software",
  "brightsafe",
  "payroll-software",
  "blip-clocking-in-app",
  "people-navigator",
  "pop-expense-tracker-app",
];

productPages.forEach((product) => {
  test(`product page visual test | @product | ${product}`, async ({ page }) => {
    await page.goto(`/${product}`);
    await page.getByRole("button", { name: "Accept all" }).click();
    await expect(page).toHaveScreenshot(`${product}.png`, { fullPage: true });
  });
});
