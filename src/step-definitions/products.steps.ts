import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";
import { LoginPage } from "../pages/login/login.page";
import { ProductsPage } from "../pages/products/products.page";

Given(
  "que estoy autenticado con el usuario {string}",
  async function (this: CustomWorld, username: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.goto();
    await loginPage.login(username, "secret_sauce");
    const productsPage = new ProductsPage(this.page);
    await productsPage.isLoaded();
  }
);

When(
  "agrego el producto {string} al carrito",
  async function (this: CustomWorld, product: string) {
    const productsPage = new ProductsPage(this.page);
    await productsPage.addToCartByName(product);
  }
);

Then(
  "el contador del carrito deberia mostrar {string}",
  async function (this: CustomWorld, count: string) {
    const productsPage = new ProductsPage(this.page);
    const actual = await productsPage.getCartCount();
    expect(actual).toBe(parseInt(count, 10));
  }
);
