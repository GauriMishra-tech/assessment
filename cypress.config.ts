 import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1180,
  // viewportWidth: 320,
  // viewportHeight: 568,
  defaultCommandTimeout: 12000,
  numTestsKeptInMemory: 0,
  pageLoadTimeout: 60000,
  responseTimeout: 45000,
  requestTimeout: 45000,
  retries: {
    runMode: 2,
    openMode: 2,
  },
  env: {
    baseUrl: "https://demoqa.com/forms",
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Default pattern
    setupNodeEvents(on, config) {
      //Implement Code
    },
  }
})
