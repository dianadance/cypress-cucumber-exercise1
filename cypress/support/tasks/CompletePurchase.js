class CompletePurchase {
    static purchaseProducts(){
        cy.contains('Purchase').click(); 
        cy.contains('Thank you for your purchase').should('be.visible');
    }
}
export default CompletePurchase;