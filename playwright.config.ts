import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    viewport: { width: 1280, height: 720 },
    screenshot: "only-on-failure",
    actionTimeout: 30000,
    navigationTimeout: 30000
  },
  timeout: 60000,
  reporter: [["html", { outputFolder: "reports/playwright-report" }]],
});
