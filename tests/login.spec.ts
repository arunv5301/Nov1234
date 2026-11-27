import test from "@playwright/test";

test.describe("Login Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://studio149.artha.com/admin/");
  })
  test.afterEach(async ({ page }) => {
    await page.locator("[id='BtLogin']").click();
  })
  test("Login with valid credentials", async ({ page }) => {
    await page.getByPlaceholder('Email').fill('vishwak@arthasystems.com');
    await page.getByPlaceholder('Password').fill('welcome');

  });
  test("Login with invalid credentials", async ({ page }) => {
    await page.getByPlaceholder('Email').fill('vishwak1@arthasystems.com');
    await page.getByPlaceholder('Password').fill('welcome123');
  })
});
