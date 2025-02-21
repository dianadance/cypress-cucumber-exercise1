class AddProductsToCart {
    static selectProduct(productName){
        cy.contains(productName).click(); 
        cy.wait(1200);
        cy.contains('Add to cart').click();
    };
}

export default AddProductsToCart;