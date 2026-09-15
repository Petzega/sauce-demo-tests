import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
      headless: false,
      viewport: { width: 1280, height: 720 },
      baseURL: "https://www.saucedemo.com",
      screenshot: "only-on-failure",
      actionTimeout: 30000,
      navigationTimeout: 30000
  },
  timeout: 60000,
  reporter: [["html", { outputFolder: "reports/playwright-report" }]],
});
