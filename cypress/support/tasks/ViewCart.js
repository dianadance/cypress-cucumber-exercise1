class ViewCart {
    static viewCartContent(){
        cy.contains('Cart').click();
        cy.wait(1200);
        cy.get('.table').should('be.visible'); 
    }
}
export default ViewCart;