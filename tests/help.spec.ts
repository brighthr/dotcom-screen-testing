import { test, expect } from "@chromatic-com/playwright";

const helpPages = ["faqs", "videos", "guides"];

helpPages.forEach((helpPage) => {
  test(`help types page visual test | @help | ${helpPage}`, async ({
    page,
  }) => {
    await page.goto(`/help/${helpPage}`);
    await page.getByRole("button", { name: "Accept all" }).click();
    await expect(page).toHaveScreenshot(`${helpPage}.png`, { fullPage: true });
  });
});
