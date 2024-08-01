const { test, expect } = require('@playwright/test');
import { CreatePage } from '../pages/CreatePage';
import { selectRandom } from '../utils/random';
import { getToday } from '../utils/day';
const id = process.env.USER_ID
const password = process.env.USER_PASSWORD

test("タイトル表示", async ({ page }) => {
    let attempts = 0
    const d = new Date()
    const today = getToday(d)
    const num = selectRandom()

    const createPage = new CreatePage(page)
    await createPage.goto('/login')
    await createPage.fillLoginId(id)
    await createPage.fillLoginPassWord(password)
    await createPage.clickLoginButton()

    await Promise.all([
        createPage.waitForUserAccountRes(),
        createPage.waitForDomContainerWeatherList()
    ])

    while (attempts < 3) {
        try {
            await createPage.selectOtenki(`otenki${num}`)
            await createPage.clickConfirmWeatherButton()
            await Promise.all([
                createPage.clickSubmitWeatherButton(),
                createPage.waitForCompleteModal()
            ])
            break;
        } catch (e) {
            console.log(e)
        }
        finally {
            await expect(createPage.calender).toHaveValue(today)
        }
    }
});

