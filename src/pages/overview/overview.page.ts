import { Page, expect } from "@playwright/test";
import { BasePage } from "../base.page";
import { OverviewLocators } from "./overview.locators";

export class OverviewPage extends BasePage {
  private readonly locators: OverviewLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new OverviewLocators(page);
  }

  async isLoaded(): Promise<void> {
    await expect(this.locators.title).toHaveText("Checkout: Overview");
  }
}
