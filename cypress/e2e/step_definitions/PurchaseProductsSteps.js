import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import User from "../../support/actors/user.js";
import AddProductsToCart from "../../support/tasks/AddProductsToCart.js";
import ViewCart from "../../support/tasks/ViewCart.js";
import CompletePurchaseForm from "../../support/tasks/CompletePurchaseForm.js";
import CompletePurchase from "../../support/tasks/CompletePurchase.js";

Given('User1 navigates to Home page', ()  => {
    User.goToHomePage();
});

And('User1 adds 2 products to the cart', () => {
    AddProductsToCart.selectProduct("Samsung galaxy s6");
    User.goToHomePage();
    cy.wait(1200);
    AddProductsToCart.selectProduct("Nexus 6");
});

And('User1 views the cart', () => {
    ViewCart.viewCartContent();
});

When ('User1 completes the purchase form with my information', function (datatable) {
    cy.contains('Place Order').click();
    CompletePurchaseForm.withInformation(datatable.raw()[0][1], datatable.raw()[1][1], datatable.raw()[2][1], datatable.raw()[3][1], datatable.raw()[4][1], datatable.raw()[5][1]);
  });
  
Then ('User1 completes the purchase', () => {
    CompletePurchase.purchaseProducts();
  });