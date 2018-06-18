describe("visit page as Admin",function(){
  beforeEach(function () {
    cy.visit('/');
  }),
  it("visits the app",()=>{ 
    cy.signup('admin@fi.co','secret123');//correct credentials
    cy.contains('Admin Homepage');
    cy.contains('Go to New Site');//for admin
    cy.contains('Logout').click();
    
  }),
  it("doesn't allow the user with incorrect credentials to login",()=>{
    cy.signup('admin@fi.co', 'teju1234', true);//wrong password
    cy.signup('admin.co', 'secret1234', true);//unregistered or wrong mail ID
    cy.signup('@@@','#243', true)//with incorrect credentials
  })
});
