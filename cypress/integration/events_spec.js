describe("allows to register for an event",()=>{
  it("allows us to know more about the upcoming event",()=>{
    let phone = '9999999999';
    cy.visit('/');
    cy.contains('Events').should('have.attr','href',('/events')).click();
    cy.get('.featured-hero').click();
    //cy.get('.glyphicon').focus().click();
    cy.get('.registration-form').within(($form)=>{
     cy.form();
      cy.get('#phone_number').type(phone).should('have.value', phone);
      cy.contains('Register to this event').click();
      
    });
    cy.get('.modal-header').contains('You are successfully registered for');
    cy.get(".close").click();
    cy.contains('You are confirmed for this event. Congratulations!');
    cy.get(".event-registered-message").contains("Cancel Attendance").focus().click();
    cy.contains("You have indicated that you are NOT attending this event.");
    cy.contains("Register to this event").click();
    cy.get('.modal-header').contains('You are successfully registered for');
    cy.get(".close").click();
    cy.contains('Logout').click();
  })
})