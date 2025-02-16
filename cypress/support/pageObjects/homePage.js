class homePage {

    static url = "https://www.demoblaze.com/";

    static visit() {
        cy.visit(this.url);
    }

    static selectProduct(productName){
        cy.contains(productName).click(); 
        cy.wait(1200);
    };

    static viewCart(){
        cy.get('#cartur').click();
        cy.wait(1200);
    }

}

export default homePage