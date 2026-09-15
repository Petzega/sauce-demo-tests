module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["src/step-definitions/**/*.steps.ts", "src/support/**/*.ts"],
    paths: ["src/features/**/*.feature"],
    format: [
      "progress",
      "html:reports/cucumber-report.html",
      "json:reports/cucumber-report.json",
    ],
    formatOptions: {
      snippetInterface: "async-await",
    },
    timeout: 60000,
    worldParameters: {
      headed: false,
    },
  },
};
