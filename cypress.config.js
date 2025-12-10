const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //  specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx,feature}" removed the .cy because files werent visible in e2e with that.
     specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },
 
});
