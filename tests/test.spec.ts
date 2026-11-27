import test from "@playwright/test";

test.describe("Login test", ()=>{
    test.beforeEach(async()=>{
        console.log("Before Each");
    })
    test.afterEach(async()=>{
        console.log("After Each");
    })
    test("Login with valid credential", async()=>{
        console.log("Login Valid credential");
    })
    test("Login with invalid credentail", async()=>{
        console.log("Login fail with Invalid credentail");
    })
})