const { chromium } = require('playwright');

(async() => {
    const browser = await chromium.launch()
    const page = await browser.newPage()

    await page.goto("https://www.google.com/")
    const title = await page.title()
    console.log(`Title: ${title}`)

    const heading = await page.textContent('h1')
    console.log(`Heading: ${heading}`)

    await browser.close();
})();