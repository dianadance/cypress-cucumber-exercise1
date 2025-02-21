class CompletePurchaseForm{
    static withInformation(userName, country, city, creditCard, month, year){
        cy.get('#name').type(userName);
        cy.get('#country').type(country);
        cy.get('#city').type(city);
        cy.get('#card').type(creditCard);
        cy.get('#month').type(month);
        cy.get('#year').type(year);
    }
}

export default CompletePurchaseForm;