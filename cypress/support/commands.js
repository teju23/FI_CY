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

Cypress.Commands.add('signup', (email, password, wrongEmail = false) => {
  // this helps the user to login
  cy.get('.btn-transparent')
    .focus()
    .click({ force: true })
  cy.get('#login-form').within(() => {
    cy.get('#login-email')
      .type(email)
      .should('have.value', email) // input email
    cy.get('#login-password')
      .type(password)
      .should('have.value', password) // input password
    cy.get('form').submit() // clicks on submit
  })
  if (wrongEmail) {
    // sad path
    cy.contains("Your username and password don't match") // if wrong credentials
  } else {
    // happy path
    cy.contains('You have successfully logged in.') // for correct credentials
  }
}),
Cypress.Commands.add('form', email => {
  // helps user to register
  let firstname = 'Teju'
  let lastname = 'Reddy'
  const todaysDate = Cypress.moment().format('MMMDDYYYYhh.mm.ss') // time stamp
  email = `email` + todaysDate + `@gm.co` || 'codeastratest@gmail.com' // generates new email id to register
  cy.get('#first_name')
    .type(firstname)
    .should('have.value', firstname)
  cy.get('#last_name')
    .type(lastname)
    .should('have.value', lastname)
  cy.get('input[name="user[email]"]')
    .last()
    .type(email)
    .should('have.value', email)
  cy.get('#idea_state').select('Early idea') // selects the state of idea
}),
Cypress.Commands.add('post', () => {
  // for Discussion page
  cy.contains('Add New Discussion').click()
  cy.get('#title').type('DiscussionTest1')
  cy.get('#comment').type('comment comment comment')
  cy.contains('Create Discussion').click()
  cy.contains('Successfully Posted') // created new post
  cy.get('.slider')
    .first()
    .click() // hides and unhides accordingly
  cy.get('.btn-primary')
    .first()
    .click()
  cy.get('#title')
    .type('{selectall}')
    .type('{backspace}')
  cy.get('#title').type('testing')
  cy.contains('Update Discussion').click()
  cy.contains('Successfully updated...') // updation of title
  cy.get('.large-heading').contains('testing') // checks updated title
  cy.contains('Reply').click()
  cy.get('#field_2').type('test Reply 1')
  cy.get('.reply .btn')
    .first()
    .click()
  cy.contains('Successfully Posted') // checks Reply to the post
  cy.get('.panel-heading').then(() => {
    cy.get('.slider')
      .last()
      .click()
  })
  cy.get('.reply_toggle_link').then(() => {
    cy.contains('Delete').click() // Deletes the reply
  })
  cy.get('.btn-danger').click()
  cy.contains('Deletion Successful') // Deletes the created post
}),
Cypress.Commands.add('location', () => {
  // To set the location to silicon valley
  cy.get('#location-search')
    .type('Silicon Valley')
    .should('have.value', 'Silicon Valley') // type and select the location
  cy.get('.ui-autocomplete .ui-corner-all', { timeout: 20000 })
  cy.get('.ui-corner-all> li')
    .first()
    .click()
}),
Cypress.Commands.add('event_register', () => {
  cy.visit('/events')
  cy.get('.featured-hero').click() // click on the first event available
  cy.contains('Register to this event').click()
  cy.get('.modal-header').contains('You are successfully registered for') // clicks on regiter for event to register
  cy.get('.close').click() // close the message populated saying u have successfully reghistered for event
  cy.contains('You are confirmed for this event. Congratulations!') // checks for message of confirmation
  cy.get('.event-registered-message')
    .contains('Cancel Attendance')
    .focus()
    .click() // cancels the regitration
  cy.contains('You have indicated that you are NOT attending this event.') // message saying the cancellation for event was successful
  cy.contains('Register to this event').click() // recheck for the button click
  cy.get('.modal-header').contains('You are successfully registered for')
  cy.get('.close').click()
  cy.get('.event-registered-message')
    .contains('Cancel Attendance')
    .focus()
    .click() // to make the form as not registered user temporary fix for Attend.count.destroy
}),
Cypress.Commands.add('hover', (navElement, dropElement) => {
  // to get the list when hovered on nav bar elements
  cy.get('.main-header')
    .contains(navElement)
    .trigger('mouseover')
  cy.contains(dropElement).click()
}),
Cypress.Commands.add('logout', () => {
  // logs out
  cy.contains('Logout').click({ force: true })
}),
Cypress.Commands.add('detailedRegisterForm', () => {
  // form completion
  cy.get('#education').select('3') // selects the education
  cy.get('#professional_experience').select('2') // selects the /professionalexperience
  cy.get('#start_up_experience').select('1')
  cy.get('#idea_field_experience').select('1')
  cy.get('#working_hrs_on_idea').select('1')
  cy.get('#team_size').select('4')
  cy.get('#primary_skill').select('1')
  cy.get('#field_2').type(
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  )
  cy.get('#gender').select('4')
  cy.get('#phone_number').type('9999999999')
  cy.get('#linkedin_website').type('expert@linked.co')
  cy.get('input[name="company[name]"]').type('justAName')
  cy.get('.select')
    .last()
    .select('Meetup')
  cy.get('input[name="user[source_1]"]').type(
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  )
  cy.get('input[value="SUBMIT APPLICATION"]').click()
})
