import { test, expect } from "@chromatic-com/playwright";

const whoWeServePages = [
  "start-ups",
  "small-business",
  "medium-business",
  "large-business",
];

whoWeServePages.forEach((whoWeServePage) => {
  test(`who we serve page visual test | @whoWeServe | ${whoWeServePage}`, async ({
    page,
  }) => {
    await page.goto(`/who-we-serve/${whoWeServePage}`);
    await page.getByRole("button", { name: "Accept all" }).click();
    await expect(page).toHaveScreenshot(`${whoWeServePage}.png`, {
      fullPage: true,
    });
  });
});
