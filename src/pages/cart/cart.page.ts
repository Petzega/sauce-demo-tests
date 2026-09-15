import { Page, expect } from "@playwright/test";
import { BasePage } from "../base.page";
import { CartLocators } from "./cart.locators";

export class CartPage extends BasePage {
  private readonly locators: CartLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CartLocators(page);
  }

  async isLoaded(): Promise<void> {
    await expect(this.locators.title).toHaveText("Your Cart");
  }

  async getItemNames(): Promise<string[]> {
    return await this.locators.cartItems
      .locator('[data-test="inventory-item-name"]')
      .allTextContents();
  }

  async checkout(): Promise<void> {
    await this.locators.checkoutButton.click();
  }
}
