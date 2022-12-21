describe("Add to Cart' button for a product on the home page and in doing so their cart increases by one", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
//users can navigate from the home page to the product detail page by clicking on a product.
  it("Click add to cart", () => {
    cy.get(".products article").should("be.visible");
    cy.get(".products article").first().click();
    cy.get(".product-detail .button_to").should("have.text", "\n           Add\n");
    cy.get(".product-detail .button_to").click();
// users can click the 'Add to Cart' button for a product on the home page and in doing so their cart increases by one.
cy.visit('http://localhost:3000/cart')
    
cy.get('button.btn.btn-xs.btn-success').first().click({force: true});
cy.get('tr').contains('td', '2')

cy.get('button.btn.btn-xs.btn-danger').first().click({force: true});
cy.get('tr').contains('td', '1')

  });    
})