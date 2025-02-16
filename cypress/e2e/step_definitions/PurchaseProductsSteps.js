import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../support/pageObjects/homePage.js";
import productPage from "../../support/pageObjects/productPage.js";
import cartPage from "../../support/pageObjects/cartPage.js";
import purchaseFormPage from "../../support/pageObjects/purchaseFormPage.js";

Given('I navigate to Home page', ()  => {
    homePage.visit();
});

And('select firstProduct from Home page', () => {
    homePage.selectProduct("Samsung galaxy s6");
});

And('add firstProduct to the cart', () => {
    productPage.addProductToCart();
});

And('select secondProduct from Home page', () => {
    homePage.visit();
    cy.wait(1200);
    homePage.selectProduct("Nexus 6");
});

And('add secondProduct to the cart', () => {
    productPage.addProductToCart();
});

And('view the cart', () => {
    homePage.viewCart();
});

And('click on the Place Order button', () => {
    cartPage.placeOrder();
});

And('complete the purchase form with my information', function (datatable) {
    purchaseFormPage.getClientName(datatable.raw()[0][1]);
    purchaseFormPage.getCountry(datatable.raw()[1][1]);
    purchaseFormPage.getCity(datatable.raw()[2][1]);
    purchaseFormPage.getCreditCard(datatable.raw()[3][1]);
    purchaseFormPage.getMonth(datatable.raw()[4][1])
    purchaseFormPage.getYear(datatable.raw()[5][1])
  });

  When('click on the purchase button', () => {
    purchaseFormPage.completePurchase();
  });
  
  Then('I should see the confirmation message {string}', (confirmationMessage) => {
    cy.contains(confirmationMessage).should('be.visible');
  });