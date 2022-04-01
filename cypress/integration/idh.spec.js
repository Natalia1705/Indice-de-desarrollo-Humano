/* eslint-disable testing-library/await-async-utils */
/* eslint-disable jest/valid-title */
/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("title,chart, bottom card must be visible", () => {
    cy.get("h4").should("be.visible");
    cy.get("#barChart").should("be.visible");
    cy.get("#bottomCard").should("be.visible");
  });

  it("select State, year, sort must change depending on selected data ", () => {
    cy.get("#state").select("Tamaulipas").should("be.visible");
    cy.get("#year").select("2015").should("be.visible");
    cy.get("#sort").select("Alfabeticamente A-Z").should("be.visible");
  });

  it("title,chart, bottom card must be visible in small screens", () => {
    cy.viewport(320, 480);
    cy.get("h4").should("be.visible").wait(1000);
    cy.get("#barChart").should("be.visible").wait(1000);
    cy.get("#bottomCard").should("be.visible").wait(1000);
  });

  it("select state, year and sort in small screen must change depending on selected data", () => {
    cy.viewport(320, 480);
    cy.get("#state").select("Puebla").should("be.visible").wait(1000);
    cy.get("#sort")
      .select("Descendente", { force: true })
      .should("be.visible")
      .wait(1000);
    cy.get("#year").select("2018", { force: true }).should("be.visible");
  });
});
