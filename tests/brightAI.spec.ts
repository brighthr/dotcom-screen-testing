import { test, expect } from "@chromatic-com/playwright";

test("ai at brighthr page visual test | @brightAI", async ({ page }) => {
  await page.goto("/articles/technology/ai-at-brighthr/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await expect(page).toHaveScreenshot("brightAI.png", {
    fullPage: true,
  });
});
