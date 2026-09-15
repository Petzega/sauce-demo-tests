import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";
import { LoginPage } from "../pages/login/login.page";

Given("que estoy en la pagina de login", async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.goto();
});

When(
  "ingreso el usuario {string} y la contrasena {string}",
  async function (this: CustomWorld, username: string, password: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.login(username, password);
  }
);

Then(
  "deberia ver la pagina de productos",
  async function (this: CustomWorld) {
    await expect(this.page).toHaveURL(/inventory/);
  }
);

Then(
  "deberia ver un mensaje de error de usuario bloqueado",
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    const error = await loginPage.getErrorMessage();
    expect(error).toContain("locked out");
  }
);

Then(
  "deberia ver un mensaje de error de credenciales invalidas",
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    const error = await loginPage.getErrorMessage();
    expect(error).toContain("do not match");
  }
);
