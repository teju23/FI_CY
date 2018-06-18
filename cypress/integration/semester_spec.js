describe("it allows admin to create a new semester",()=>{
  beforeEach(function () {
    cy.visit('/');
  })
  it("Admin creates a new semester",()=>{
    cy.signup('admin@fi.co', 'secret123');
    cy.contains('New Semester').should('have.attr', 'href','/admin/new_semester').click();
    cy.get('#city').select('Boston');
    cy.wait(5000);
    cy.get('input[value="create"]').focus().click();
    cy.wait(5000);
    cy.get('body').then(($body) => {
      ($body.text().includes('Launched Boston'))
    });
    // cy.contains('Launched Boston');
    cy.contains("Logout").click();
  })
  // it("allows to register for new semester",()=>{

  //   cy.get('#location-search').type('Silicon Valley').type('{enter}');
  //   cy.contains('Join').should('have.attr', 'href', ('/join')).focus().click();
  //   cy.form();
  // })
})