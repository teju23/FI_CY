describe("visit page as Admin",function(){
  it("visits the app",()=>{
    cy.server(); 
    cy.signup('teju@codeastra.com','secret123');//correct credentials
    cy.contains('Go to New Site');//for admin
    cy.contains('Logout').click();
    
  }),
  it("doesn't allow the user with incorrect credentials to login",()=>{
    cy.signup('teju@codeastra.com', 'teju1234', true);//wrong password
    cy.signup('teju.co', 'secret1234', true);//unregistered or wrong mail ID
    cy.signup('@@@','#243', true)//with incorrect credentials
  })
});
