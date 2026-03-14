const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config)
      return config
    }
  },
  env: {
    allure: true,
    allureResultsPath: 'allure-results'
  }
})