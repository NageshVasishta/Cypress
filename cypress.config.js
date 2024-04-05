const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hzbo3y',
  defaultCommandTimeout : 6000,
  reporter : "mochawesome",
  video : true,
  reporterOptions: {
    // disable overwrite to generate many JSON reports
    overwrite: false,
    // do not generate intermediate HTML reports
    html: false,
    // generate intermediate JSON reports
    json: true
  },
  e2e: {
    baseUrl : "https://www.saucedemo.com/",
    specPattern : 'cypress/e2e/AutomationPratice/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs : true,
  },
});
