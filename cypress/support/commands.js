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
  cy.visit('/');
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
Cypress.Commands.add("form",()=>{
  let firstname= 'Teju';
  let lastname = 'Reddy';
  let email = 'codeastratest@gmail.com';
  cy.get('#first_name').type(firstname).should('have.value', firstname);
  cy.get('#last_name').type(lastname).should('have.value', lastname);
  cy.get('input[name="user[email]"]').last().type(email).should('have.value', email);
  cy.get('#idea_state').select("Early idea");  
})
