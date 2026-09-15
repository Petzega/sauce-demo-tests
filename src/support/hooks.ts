import { Before, After, Status } from "@cucumber/cucumber";
import { CustomWorld } from "./world";

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld, { result }) {
  if (result?.status === Status.FAILED && this.page) {
    await this.page.screenshot({
      path: `reports/screenshots/failed-${Date.now()}.png`,
      fullPage: true,
    });
  }
  await this.close();
});
