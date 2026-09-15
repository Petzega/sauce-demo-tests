import { Page, expect } from "@playwright/test";
import { BasePage } from "../base.page";
import { CheckoutLocators } from "./checkout.locators";

export class CheckoutPage extends BasePage {
  private readonly locators: CheckoutLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CheckoutLocators(page);
  }

  async isLoaded(): Promise<void> {
    await expect(this.locators.title).toHaveText("Checkout: Your Information");
  }

  async fillInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.locators.firstNameInput.fill(firstName);
    await this.locators.lastNameInput.fill(lastName);
    await this.locators.postalCodeInput.fill(postalCode);
  }

  async continue(): Promise<void> {
    await this.locators.continueButton.click();
  }
}
