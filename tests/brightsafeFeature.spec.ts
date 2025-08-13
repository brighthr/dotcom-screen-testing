import { test, expect } from "@chromatic-com/playwright";

const featurePages = [
  "health-and-safety-software",
  "accident-near-miss-reporting",
  "coshh-risk-assessment",
  "brightsafe-on-the-go",
  "health-and-safety-advice-line",
  "health-and-safety-insurance",
  "health-and-safety-elearning",
  "brightlearn-health-and-safety",
];

featurePages.forEach((feature) => {
  test(`brightsafe feature page visual test | @brightsafeFeature | ${feature}`, async ({
    page,
  }) => {
    await page.goto(`/brightsafe/${feature}`);
    await page.getByRole("button", { name: "Accept all" }).click();
    await expect(page).toHaveScreenshot(`${feature}.png`, { fullPage: true });
  });
});
