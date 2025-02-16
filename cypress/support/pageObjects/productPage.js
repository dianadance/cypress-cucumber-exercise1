class productPage {
    static addProductToCart(){
        cy.contains('Add to cart').click();
    }
}

export default productPage