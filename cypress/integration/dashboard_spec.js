describe('it allows the admin to login and use dashboard',()=>{
  it("allows to login as Admin",()=>{
    cy.visit('/')
    cy.signup('teju@codeastra.com', 'secret123');//as admin
    cy.contains('Go to New Site').click();//for admin
    cy.contains('Go to Dashboard');
    cy.contains('Logout').should('have.attr', 'href','/logout').click({force:true});
  })
})