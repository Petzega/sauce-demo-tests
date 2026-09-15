import { When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { CartPage } from "../pages/cart/cart.page";
import { CheckoutPage } from "../pages/checkout/checkout.page";
import { OverviewPage } from "../pages/overview/overview.page";

When("hago clic en Checkout", async function (this: CustomWorld) {
  const cartPage = new CartPage(this.page);
  await cartPage.checkout();
});

When(
  "lleno el formulario con {string}, {string} y {string}",
  async function (
    this: CustomWorld,
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.isLoaded();
    await checkoutPage.fillInformation(firstName, lastName, postalCode);
  }
);

When("hago clic en Continue", async function (this: CustomWorld) {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.continue();
});

Then(
  "deberia ver la pagina de resumen del checkout",
  async function (this: CustomWorld) {
    const overviewPage = new OverviewPage(this.page);
    await overviewPage.isLoaded();
  }
);
