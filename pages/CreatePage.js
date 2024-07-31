export class CreatePage  {
    constructor(page) {
        this.page = page
        this.inputLoginId = this.page.locator('input[name=loginId]')
        this.inputLoginPassWord = this.page.locator('input[name=loginPassword]')
        this.buttonLogin = this.page.getByRole('button', { name: 'ログイン' })

        this.containerWeatherList = this.page.locator('#form_validation')

        this.calender = this.page.locator('.calendar')
    }

    async goto(url) {
        await this.page.goto(url)
    }

    async fillLoginId(value) {
        await this.inputLoginId.fill(value)
    }

    async fillLoginPassWord(value) {
        await this.inputLoginPassWord.fill(value)
    }

    async clickLoginButton() {
        await this.buttonLogin.click()
    }

    async waitForUserAccountRes() {
        await this.page.waitForResponse(
            (res) => res.url().includes('/api/otenki/user/index?past_days=7') && res.status() === 200
        )
    }

    async waitForDomContainerWeatherList() {
        await this.containerWeatherList.waitFor({state:"attached"})
    }
}