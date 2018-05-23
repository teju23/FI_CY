describe("it allows admin to create a new semester",()=>{
  beforeEach(function () {
    cy.visit('/');
  })
  it("Admin creates a new semester",()=>{
    
    cy.signup('teju@codeastra.com', 'secret123');
    cy.contains('New Semester').should('have.attr', 'href','/admin/new_semester').click();
    cy.get('#city').select('Boston');
    cy.get('input[type="submit"]').contains('create').focus();
    cy.contains("Logout").click();
  })
  it("allows to register for new semester",()=>{

    cy.get('#location-search').type('Silicon Valley').type('{enter}');
    cy.contains('Join').should('have.attr', 'href', ('/join')).focus().click();
    cy.form();
  })
})