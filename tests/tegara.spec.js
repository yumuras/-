const { test, expect } = require('@playwright/test');
const id = process.env.USER_ID
const password = process.env.USER_PASSWORD

test("タイトル表示",async({ page }) => {
    await page.goto('/login');
    await page.locator('#form-validation-field-0').fill(id);
    await page.locator('#form-validation-field-1').fill(password);
    await expect(page.getByRole('img', { name: 'テガラみるロゴ' })).toBeVisible()
});
    
