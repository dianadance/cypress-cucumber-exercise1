const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: '*.js',
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    supportFile: false,
  },
})
