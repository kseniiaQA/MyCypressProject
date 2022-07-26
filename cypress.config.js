const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
  chromeWebSecurity: false,
  pageLoadTimeout: 20000
  }
})
