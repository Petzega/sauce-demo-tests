import { Locator, Page } from "playwright";

export class OverviewLocators {
  readonly title: Locator;
  readonly finishButton: Locator;
  readonly cancelButton: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.finishButton = page.locator('id=finish');
    this.cancelButton = page.locator('id=cancel');
  }
}
