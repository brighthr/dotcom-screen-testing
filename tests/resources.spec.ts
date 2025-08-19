import { test, expect } from "@chromatic-com/playwright";

const resourcePages = [
  "resource-centre",
  "download-centre",
  "articles",
  "webinars",
  "blog",
  "leaders-in-tech",
  "payback-calculator",
];

resourcePages.forEach((resource) => {
  test(`resource page visual test | @resource | ${resource}`, async ({
    page,
  }) => {
    await page.goto(`/${resource}`);
    await page.getByRole("button", { name: "Accept all" }).click();
    await expect(page).toHaveScreenshot(`${resource}.png`, { fullPage: true });
  });
});
