import test from "@playwright/test";

test.describe("Login test", () => {
  test.beforeEach(async ({page})=>{
    await page.goto("https://retaildemo.artha.com/admin/login");
  })
  test("Login with valid credintail", async ({page})=>{
    await page.locator("#TxtAdminUserId").fill("vishwak@arthasystems.com");
    await page.locator("#TxtAdminPassword").fill("welcome");
      })
  test("Login with invalid credintial", async ({page})=>{
    await page.locator("#TxtAdminUserId").fill("invalid@arthasystems.com");
    await page.locator("#TxtAdminPassword").fill("invalid");
      })
  test.afterEach(async ({page})=>{
    await page.locator("button[type='submit']").click();
  })
})