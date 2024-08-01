export class CreatePage  {
    constructor(page) {
        this.page = page
        this.inputLoginId = this.page.locator('input[name=loginId]')
        this.inputLoginPassWord = this.page.locator('input[name=loginPassword]')
        this.buttonLogin = this.page.getByRole('button', { name: 'ログイン' })
        this.buttonConfirmWeather = this.page.getByText('この内容で送信する')
        this.buttonSubmitWeather = this.page.getByRole('button', { name: '送信' })
        this.containerWeatherList = this.page.locator('#form_validation')
        this.calender = this.page.locator('.calendar')
        this.completeModal = this.page.locator('[data-remodal-id="modal_weather_send"]')
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

    async clickConfirmWeatherButton() {
        await this.buttonConfirmWeather.click()
    }

    async clickSubmitWeatherButton() {
        await this.buttonSubmitWeather.click()
    }

    async selectOtenki(otenki) {
        await this.page.locator(`label[for="${otenki}"]`).click()
    }

    async waitForUserAccountRes() {
        await this.page.waitForResponse(
            (res) => res.url().includes('/api/otenki/user/index?past_days=7') && res.status() === 200
        )
    }

    async waitForDomContainerWeatherList() {
        await this.containerWeatherList.waitFor({state:"attached"})
    }

    async waitForCompleteModal() {
        await this.completeModal.waitFor({state:"attached"})
    }
}