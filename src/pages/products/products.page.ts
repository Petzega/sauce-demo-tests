import { Page, expect } from "@playwright/test";
import { BasePage } from "../base.page";
import { ProductsLocators } from "./products.locators";

export class ProductsPage extends BasePage {
  private readonly locators: ProductsLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new ProductsLocators(page);
  }

  async isLoaded(): Promise<void> {
    await expect(this.locators.title).toHaveText("Products");
  }

  async addToCartByName(name: string): Promise<void> {
    await this.locators.addToCartButton(name).click();
  }

  async getCartCount(): Promise<number> {
    const text = await this.locators.shoppingCartBadge.textContent();
    return parseInt(text || "0", 10);
  }
}
