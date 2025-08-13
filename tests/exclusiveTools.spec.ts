import { test, expect } from "@chromatic-com/playwright";

const exclusiveTools = [
  "brightwellbeing-employee-support",
  "bright-exchange-online-marketplace",
  "bright-brainbox",
];

exclusiveTools.forEach((exclusiveTool) => {
  test(`exclusive tool page visual test | @exclusiveTools | ${exclusiveTool}`, async ({
    page,
  }) => {
    await page.goto(`/${exclusiveTool}`);
    await page.getByRole("button", { name: "Accept all" }).click();
    await expect(page).toHaveScreenshot(`${exclusiveTool}.png`, {
      fullPage: true,
    });
  });
});
