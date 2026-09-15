import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";
import { ProductsPage } from "../pages/products/products.page";
import { CartPage } from "../pages/cart/cart.page";

When("hago clic en el icono del carrito", async function (this: CustomWorld) {
  const productsPage = new ProductsPage(this.page);
  await productsPage.goToCart();
});

Then(
  "el carrito deberia mostrar el producto {string}",
  async function (this: CustomWorld, product: string) {
    const cartPage = new CartPage(this.page);
    await cartPage.isLoaded();
    const items = await cartPage.getItemNames();
    expect(items).toContain(product);
  }
);
