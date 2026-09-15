import { Locator, Page } from "playwright";

export class CheckoutLocators {
  readonly title: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.firstNameInput = page.locator('id=first-name');
    this.lastNameInput = page.locator('id=last-name');
    this.postalCodeInput = page.locator('id=postal-code');
    this.continueButton = page.locator('id=continue');
    this.cancelButton = page.locator('id=cancel');
  }
}
