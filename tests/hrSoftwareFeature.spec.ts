import { test, expect } from "@playwright/test";

const featurePages = [
  "staff-holiday-planner",
  "sick-leave-and-lateness",
  "shifts-and-rotas",
  "performance-management",
  "hr-document-storage",
  "overtime",
  "employee-recognition-platform",
  "payroll-navigator",
  "redundancy-navigator",
];

featurePages.forEach((feature) => {
  test(`feature page visual test | @feature | ${feature}`, async ({ page }) => {
    await page.goto(`/hr-software/${feature}`);
    await page.getByRole("button", { name: "Accept all" }).click();
    await expect(page).toHaveScreenshot(`${feature}.png`, { fullPage: true });
  });
});
