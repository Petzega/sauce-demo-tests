import { Page } from "playwright";
import { BasePage } from "../base.page";
import { LoginLocators } from "./login.locators";

export class LoginPage extends BasePage {
  private readonly locators: LoginLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new LoginLocators(page);
  }

  async goto(): Promise<void> {
    await this.page.goto("https://www.saucedemo.com");
  }

  async login(username: string, password: string): Promise<void> {
    await this.locators.usernameInput.fill(username);
    await this.locators.passwordInput.fill(password);
    await this.locators.loginButton.click();
  }

  async getErrorMessage(): Promise<string | null> {
    return await this.locators.errorMessage.textContent();
  }
}
