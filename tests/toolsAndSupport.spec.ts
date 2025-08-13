import { test, expect } from "@chromatic-com/playwright";

test(`tools and support menu visual test | @toolsAndSupportMenu`, async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name.includes("Mobile"),
    "Navbar hover tests not applicable on mobile"
  );
  await page.goto("/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByText("Product").nth(1).hover();
  await page.getByRole("link", { name: "Exclusive tools and support" }).hover();
  await expect(page).toHaveScreenshot("toolsAndSupport.png");
});
