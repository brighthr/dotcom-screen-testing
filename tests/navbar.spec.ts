import { test, expect } from "@playwright/test";

const navBarItems = ["Products", "Resources", "Who we serve"];

navBarItems.forEach((navBarItem) => {
  test(`navbar visual test | @navbar |${navBarItem}`, async ({
    page,
  }, testInfo) => {
    test.skip(
      testInfo.project.name.includes("Mobile"),
      "Navbar hover tests not applicable on mobile"
    );
    await page.goto("/");
    await page.getByRole("button", { name: "Accept all" }).click();
    await page.getByText(navBarItem).nth(1).hover();

    await expect(page).toHaveScreenshot(`${navBarItem}Menu.png`);
  });
});
