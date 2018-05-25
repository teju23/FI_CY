describe("Super Admin discussion page",()=>{
  it("allows admin to create and delete assignments discussion", () => {
    cy.signup('teju@codeastra.com', 'secret123');
    cy.contains('You have successfully logged in.');
    cy.get(".admin_super").contains("Discuss").should('have.attr', 'href', '/discussions').click();
    cy.contains('Assignments').should('have.attr', 'href', '/discussions?category=Assignments').click();
    cy.contains('Add New Discussion').click();
    cy.get('#title').type('Assignment test1')
    cy.get('#comment').type('comment comment comment');
    cy.contains('Create Discussion').click();
    cy.get('.slider').first().click();
    cy.get('.btn-primary').first().click();
    cy.get('#title').type('{selectall}').type('{backspace}');
    cy.get('#title').type('testing');
    cy.contains('Update Discussion').click();
    cy.get('.large-heading').contains('testing');
    cy.contains('Reply').click();
    cy.get('#field_2').type("test Reply 1");
    cy.get('.reply .btn').first().click();
    cy.contains('Successfully Posted');
    cy.get('.panel-heading').then(() => {
      cy.get('.slider').last().click();
    })
    cy.get('.reply_toggle_link').then(() => {
      cy.contains('Delete').click();
    })
    cy.get('.btn-danger').click();
  })
  it("allows admin to create and delete ideas discussion", () => {
    cy.signup('teju@codeastra.com', 'secret123');
    cy.contains('You have successfully logged in.');
    cy.get(".admin_super").contains("Discuss").should('have.attr', 'href', '/discussions').click();
    cy.contains('Ideas').should('have.attr','href','/discussions?category=Ideas').click();
    cy.contains('Add New Discussion').click();
    cy.get('#title').type('Assignment test1')
    cy.get('#comment').type('comment comment comment');
    cy.contains('Create Discussion').click();
    cy.contains('Successfully Posted');//created new post
    cy.get('.slider').first().click();//hides and unhides accordingly
    cy.get('.btn-primary').first().click();
    cy.get('#title').type('{selectall}').type('{backspace}');
    cy.get('#title').type('testing');
    cy.contains('Update Discussion').click();
    cy.contains('Successfully updated...');//updation of title 
    cy.get('.large-heading').contains('testing');//checks updated title
    cy.contains('Reply').click();
    cy.get('#field_2').type("test Reply 1");
    cy.get('.reply .btn').first().click();
    cy.contains('Successfully Posted');//checks Reply to the post
    cy.get('.panel-heading').then(() => {
      cy.get('.slider').last().click();
    })
    cy.get('.reply_toggle_link').then(() => {
      cy.contains('Delete').click();//Deletes the reply
    })
    cy.get('.btn-danger').click();
    cy.contains('Deletion Successful');//Deletes the created post

  })
})