import { test, expect } from "@chromatic-com/playwright";

const aboutUsPages = [
  "about-us",
  "customers",
  "timeline",
  "refer-a-business",
  "our-leadership",
  "news",
];

aboutUsPages.forEach((aboutUsPage) => {
  test(`about us page visual test | @aboutUsPage | ${aboutUsPage}`, async ({
    page,
  }) => {
    await page.goto(`/${aboutUsPage}`);
    await page.getByRole("button", { name: "Accept all" }).click();
    await expect(page).toHaveScreenshot(`${aboutUsPage}.png`, { fullPage: true });
  });
});
