// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("signup", (email, password,wrongEmail = false) => {
  // cy.visit('/');
  cy.get(".btn-transparent").focus().click({ force: true });
  cy.get('#login-form').within(($form) => {
    cy.get('#email').type(email).should('have.value', email);
    cy.get('#user_password').type(password).should('have.value',password);
    cy.get('form').submit();
  });
  if(wrongEmail){
    cy.contains("Your username and password don't match");
  }else{
    cy.contains('You have successfully logged in.');
  }

}),
Cypress.Commands.add("form",(email)=>{
  let firstname= 'Teju';
  let lastname = 'Reddy';
  email = email || 'codeastratest@gmail.com';
  cy.get('#first_name').type(firstname).should('have.value', firstname);
  cy.get('#last_name').type(lastname).should('have.value', lastname);
  cy.get('input[name="user[email]"]').last().type(email).should('have.value', email);
  cy.get('#idea_state').select("Early idea");  
}),
Cypress.Commands.add('post',()=>{
  cy.contains('Add New Discussion').click();
  cy.get('#title').type('DiscussionTest1')
  cy.get('#comment').type('comment comment comment');
  cy.contains('Create Discussion').click();
  cy.wait(5000);
  cy.contains('Successfully Posted');//created new post
  cy.get('.slider').first().click();//hides and unhides accordingly
  cy.get('.btn-primary').first().click();
  cy.wait(500);
  cy.get('#title').type('{selectall}').type('{backspace}');
  cy.get('#title').type('testing');
  cy.contains('Update Discussion').click();
  cy.wait(500);
  cy.contains('Successfully updated...');//updation of title 
  cy.get('.large-heading').contains('testing');//checks updated title
  cy.contains('Reply').click();
  cy.get('#field_2').type("test Reply 1");
  cy.get('.reply .btn').first().click();
  cy.wait(500);
  cy.contains('Successfully Posted');//checks Reply to the post
  cy.get('.panel-heading').then(() => {
    cy.get('.slider').last().click();
  })
  cy.get('.reply_toggle_link').then(() => {
    cy.contains('Delete').click();//Deletes the reply
    cy.wait(500);
  })
  cy.get('.btn-danger').click();
  cy.contains('Deletion Successful');//Deletes the created post
  cy.wait(500);

}),
Cypress.Commands.add('location',()=>{
  cy.get('#location-search').type('Silicon Valley').should('have.value', 'Silicon Valley');
  cy.get('.ui-autocomplete .ui-corner-all', { timeout: 20000 });
  cy.get('.ui-corner-all> li').first().click();
}),
Cypress.Commands.add('event_register',()=>{
  cy.visit('/events');
  cy.wait(1000);
  cy.get('.featured-hero').click();
  cy.contains('Register to this event').click();
  cy.get('.modal-header').contains('You are successfully registered for');
  cy.get(".close").click();
  cy.contains('You are confirmed for this event. Congratulations!');
  cy.get(".event-registered-message").contains("Cancel Attendance").focus().click();
  cy.contains("You have indicated that you are NOT attending this event.");
  cy.contains("Register to this event").click();
  cy.get('.modal-header').contains('You are successfully registered for');
  cy.get(".close").click();
  cy.get(".event-registered-message").contains("Cancel Attendance").focus().click();//to make the form as not registered user temporary fix for Attend.count.destroy
})
