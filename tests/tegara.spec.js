const { test, expect } = require('@playwright/test');
import { CreatePage } from '../pages/CreatePage';
import { getToday } from '../utils/day';
const id = process.env.USER_ID
const password = process.env.USER_PASSWORD

test("タイトル表示",async({ page }) => {
    const d = new Date()
    const today = getToday(d)

    const createPage = new CreatePage(page)
    await createPage.goto('/login');
    await createPage.fillLoginId(id);
    await createPage.fillLoginPassWord(password);
    await createPage.clickLoginButton()

    await Promise.all([
        createPage.waitForUserAccountRes(),
        createPage.waitForDomContainerWeatherList()
    ])
    await expect(createPage.calender).toHaveValue(today)

    try{
        
    } catch(e){
        console.log(e)
    }
});
    
