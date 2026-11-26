import test from "@playwright/test";

test.describe("Login test", () => {
  test.beforeEach(async ({page})=>{
    await page.goto("https://retaildemo.artha.com/admin/login");
  })
  test("Login with valid credintail", async ({page})=>{
    await page.locator("#TxtAdminUserId").fill("vishwak@arthasystems.com");
    await page.locator("#TxtAdminPassword").fill("welcome");
    await page.locator("button[type='submit']").click();
  })
})