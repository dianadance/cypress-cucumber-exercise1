class purchaseFormPage {
    static getClientName (clientName){
        cy.get('#name').type(clientName);
    }

    static getCountry (country) {
        cy.get('#country').type(country);
    }

    static getCity (city){
        cy.get('#city').type(city);
    }
    
    static getCreditCard (creditCard){
        cy.get('#card').type(creditCard);
    }

    static getMonth (month){
        cy.get('#month').type(month);
    }

    static getYear (year){
        cy.get('#year').type(year);
    }

    static completePurchase (){
        cy.contains('Purchase').click();
    }
}

export default purchaseFormPage