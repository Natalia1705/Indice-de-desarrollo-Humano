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
    cy.get("#BarChart").should("be.visible");
    cy.get("#bottomCard").should("be.visible");
  });

  it("select State, year, sort from dropDowns ", () => {
    cy.get("#state").select("Tamaulipas");
    cy.get("#state").select("Oaxaca");
    cy.get("#state").select("Puebla");
    cy.get("#state").select("Guerrero");
    cy.get("#state").select("Querétaro");
    cy.get("#state").select("Veracruz");
    cy.get("#state").select("Aguascalientes");
    cy.get("#state").select("Nuevo León");
    cy.get("#year").select("2015");
    cy.get("#year").select("2020");
    cy.get("#year").select("2019");
    cy.get("#year").select("2018");
    cy.get("#year").select("2016");
    cy.get("#sort").select("Descendente");
    cy.get("#sort").select("Ascendente");
    cy.get("#sort").select("Alfabeticamente A-Z");
  });

  it("title,chart, bottom card must be visible in small screens", () => {
    cy.viewport(320, 480);
    cy.get("h4").should("be.visible");
    cy.get("#BarChart").should("be.visible");
    cy.get("#bottomCard").should("be.visible");
  });

  it("select state, year  in small screens", () => {
    cy.viewport(320, 480);
    cy.get("#state").select("Tamaulipas").wait(1000);
    cy.get("#state").select("Oaxaca").wait(1000);
    cy.get("#state").select("Puebla").wait(1000);
    cy.get("#state").select("Guerrero").wait(1000);
    cy.get("#state").select("Querétaro").wait(1000);
    cy.get("#state").select("Veracruz").wait(1000);
    cy.get("#state").select("Aguascalientes").wait(1000);
    cy.get("#state").select("Nuevo León").wait(1000);
    cy.get("#year").select("2015").wait(1000);
    cy.get("#year").select("2020").wait(1000);
    cy.get("#year").select("2019").wait(1000);
    cy.get("#year").select("2018").wait(1000);
    cy.get("#year").select("2016").wait(1000);
    cy.get("#sort").select("Descendente").wait(1000);
    cy.get("#sort").select("Ascendente").wait(1000);
    cy.get("#sort").select("Alfabeticamente A-Z").wait(1000);
  });
});
