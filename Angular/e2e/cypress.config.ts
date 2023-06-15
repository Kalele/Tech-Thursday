
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      login_url: '',
      test_env: "",
      password : "",
      username: ""
    },
    specPattern: "**/*.feature",
    experimentalSessionAndOrigin:true,
    failOnStatusCode: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const cucumber = require('cypress-cucumber-preprocessor').default
      const browserify = require('@cypress/browserify-preprocessor');
      const resolve = require('resolve')
      const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),     
       };
      on('file:preprocessor', cucumber(options));
      
    },
  },
});
