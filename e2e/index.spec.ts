import { test, expect, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
});

test.describe("Test the entire page flow", () => {
  const commitDetailCardElement = '[data-testid="commitDetailCard"]';
  const checkoutCommitElement = "checkoutCommitButton";

  test("The news are being loaded", async ({ page }) => {
    await expect(page).toHaveURL(page.url());
    await page.waitForSelector(commitDetailCardElement);
    await expect(page.locator(commitDetailCardElement).count()).not.toBe(0);
  });

  test("Click button and new tab needs to be open", async ({
    context,
    page,
  }) => {
    const countNewsCard = await page.locator(commitDetailCardElement).count();
    await page
      .getByTestId(
        `${checkoutCommitElement}${randomNumberInRange(0, countNewsCard)}`
      )
      .click();

    const [newtab] = await Promise.all([context.waitForEvent("page")]);
    await expect(newtab).toHaveURL(/github.com/);
  });
});

function randomNumberInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
