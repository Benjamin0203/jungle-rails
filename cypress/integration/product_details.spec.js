describe('users can navigate from the home page to the product detail page by clicking on a product.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it("There is products on the page", () => {
    cy.get(".products article").should("be.visible");
  cy.get(".products article").first().click();
  cy.get(".product-detail").should("be.visible");
  cy.get(".product-detail h1").should("have.text", "Cliff Collard");

  cy.get(".product-detail img").should("have.attr", "src", "/uploads/product/image/12/plante_12.jpg");
  cy.get(".product-detail .quantity").should("have.text", "\n        23 in stock at \n        $79.99\n      ");
  cy.get(".product-detail .button_to").should("have.text", "\n           Add\n");
  });
})