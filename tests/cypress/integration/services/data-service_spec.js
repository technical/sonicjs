const { expect } = require("chai");
const { iteratee } = require("lodash");

describe("Page Builder", function () {
  beforeEach(() => {
    // cy.SonicJs.login();
  });

  after(() => {
    // cy.visit(`${cy.SonicJs.getBaseUrl()}/admin/content`);
    // let deleteButtonPattern = '[aria-label*="Cypress PB Test"]';
    // cy.get("body").then(($body) => {
    //   if ($body.find(deleteButtonPattern).length > 0) {
    //     cy.get(deleteButtonPattern).first().click();
    //     cy.wait(500);
    //     cy.contains("Confirm Delete").click();
    //   }
    // });
  });

  it("Load Content Types", function () {
    cy.visit(`${cy.SonicJs.getBaseUrl()}/admin/content-types`);
    // cy.wait(1000);
    cy.window().then((win) => {
      win.dataService.contentTypesGet().then((data) => {
        cy.log(JSON.stringify(data));
      });
    });
  });

  it("Update Content Type", function () {
    cy.visit(`${cy.SonicJs.getBaseUrl()}/admin/content-types`);
    // cy.wait(1000);
    cy.window().then((win) => {
      
      let contentTypeToUpdate = {
        title: "mutCheck",
        moduleSystemId: "aa-cypress-module",
        systemId: "aa-cypress-module",
        data: {
          components: [{ name: "55", prop: "ipsum de lor" }],
        },
      };

      win.dataService.contentTypeUpdate(contentTypeToUpdate).then((data) => {
        cy.log(JSON.stringify(data));
      });
    });
  });

  // it("Content edit", function () {
  //   cy.visit(`${cy.SonicJs.getBaseUrl()}/cypress-pb-test`);
  //   cy.get("#sidebar-expander").click();
  //   cy.contains("Template").should("be.visible");
  //   cy.get("#page-settings").click();
  //   cy.wait(1000);

  //   cy.get('input[name="data[heroTitle]"]').type(" EDITED");
  //   cy.get('input[name="data[title]').type(" EDITED");
  //   cy.wait(1000);

  //   cy.contains("Submit").click();

  //   cy.wait(500);

  //   cy.visit(`${cy.SonicJs.getBaseUrl()}/cypress-pb-test-edited`);
  //   cy.contains("Cypress Hero EDITED");
  // });

  // it("Content delete", function () {

  //   cy.visit(`${cy.SonicJs.getBaseUrl()}/admin/content`);
  //   cy.get('input[type="search"]').type('Cypress PB Test');
  //   cy.contains('Delete').first().click();
  //   cy.wait(1000);
  //   cy.contains('Confirm Delete').click();

  //   cy.url().should('include', '/admin/content');
  //   cy.contains('Cypress Test Page').should('not.exist');

  // });
});
