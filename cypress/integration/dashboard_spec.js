describe('it allows the admin to login and use dashboard',()=>{
  beforeEach(function () {cy.visit('/');
  }),
  afterEach(()=>{
    cy.contains('Logout').should('have.attr', 'href', '/logout').click({ force: true });
  })
  it("allows to login as Admin",()=>{
    cy.signup('admin@fi.co', 'secret123');//as admin
    cy.contains('Go to New Site').click();//for admin
    cy.contains('Go to Dashboard');  
  }),
    it("allows to login as Mentor", () => {
    cy.signup('mentor@fi.co', 'secret123');//as mentor
    cy.contains('Mentor Dashboard');//for mentor
    cy.contains('Go to Dashboard');
    }),
    it("allows to login as Graduated", () => {
    cy.signup('graduated_founder@gmail.com', 'secret123');//as Graduated
    cy.contains('Welcome, Graduated!');
    cy.contains('Go to New Site').click();//for Graduated
    cy.contains('Go to Dashboard');
    }),
    it("allows to login as applied_founder", () => {
    cy.signup('applied_founder@gmail.com', 'secret123');//as applied_founder
     cy.contains('Go to Dashboard').should('not.exist');
    }),
    it("allows to login as accepted founder",()=>{
    cy.visit("/events?code=NdTjyyQrOT");//logs in as accepted_founder
    cy.contains('Founder Institute Events');
    })
})