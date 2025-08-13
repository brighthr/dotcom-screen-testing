import { test, expect } from "@chromatic-com/playwright";

const employmentLawPages = [
  "brightadvice-employment-law-advice",
  "brightbase-hr-guides-and-templates",
];

employmentLawPages.forEach((employmentLawPage) => {
  test(`employment law page visual test | @employmentLawPages | ${employmentLawPage}`, async ({
    page,
  }) => {
    await page.goto(`/${employmentLawPage}`);
    await page.getByRole("button", { name: "Accept all" }).click();
    await expect(page).toHaveScreenshot(`${employmentLawPage}.png`, {
      fullPage: true,
    });
  });
});
