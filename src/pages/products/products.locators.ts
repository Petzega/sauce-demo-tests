import { Locator, Page } from "playwright";

export class ProductsLocators {
  readonly title: Locator;
  readonly shoppingCartBadge: Locator;
  readonly shoppingCartLink: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  addToCartButton(name: string): Locator {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    return this.page.locator(`[data-test="add-to-cart-${slug}"]`);
  }
}
