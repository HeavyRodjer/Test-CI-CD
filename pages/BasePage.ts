import { Page } from "@playwright/test"

export abstract class BasePage {

    protected readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    protected log(message: string) {
        console.log(`${this.constructor.name}: ${message}`)
    }


    protected async captureScreenshot(path: string) {
        if (!path) {
            path = "."
        }
        await this.page.screenshot({ path: path })
    }

}