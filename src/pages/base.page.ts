import { Page, Locator } from "playwright";

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected getByTestId(testId: string): Locator {
    return this.page.getByTestId(testId);
  }

  protected getByText(text: string): Locator {
    return this.page.getByText(text);
  }
}
