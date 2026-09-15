import { Locator, Page } from "playwright";

export class LoginLocators {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.usernameInput = page.locator('id=user-name');
    this.passwordInput = page.locator('id=password');
    this.loginButton = page.locator('id=login-button');
    this.errorMessage = page.getByRole('alert');
  }
}
