describe('allows to register for an event', () => {
  beforeEach(() => {
    cy.visit('/') // visits website
    cy.get('.portfolio-value').scrollIntoView() // scrolls to view the nav bar
  }),
  afterEach(() => {
    cy.logout() // logsout after each block
  }),
  it('allows user to register for the upcoming event', () => {
    let phone = '9999999999'
    cy.contains('Events')
      .should('have.attr', 'href', '/events')
      .click() // goes to events page
      // cy.get('.featured-hero').click(); // clicks on the event
    cy.contains('Startup Pitch Bootcamp').click()
    cy.get('.registration-form').within(() => {
      // registers for event
      cy.form()
      cy.get('#phone_number')
        .type(phone)
        .should('have.value', phone)
      cy.contains('Register to this event').click()
    })
    cy.get('.modal-header').contains('You are successfully registered for') // check for registration success message
    cy.get('.close').click()
    cy.get('.event-registered-message')
      .contains('Cancel Attendance')
      .focus()
      .click()
    cy.contains('You have indicated that you are NOT attending this event.')
    cy.contains('Register to this event').click()
    cy.get('.modal-header').contains('You are successfully registered for')
    cy.get('.close').click()
    cy.get('.event-registered-message')
      .contains('Cancel Attendance')
      .focus()
      .click()
  }),
  it('allows accepted founder to register for the event', () => {
    cy.signup('accepted_founder@fi.co', 'secret123') // logs in as accepted founder
    cy.event_register()
  }),
  it('allows applied founder to register for the event', () => {
    cy.signup('applied_founder@fi.co', 'secret123') // logs in as applied founder
    cy.event_register()
  }),
  it('allows admin to register for the event', () => {
    cy.signup('graduated_founder@fi.co', 'secret123') // logs in as graduated founder
    cy.event_register()
  }),
  it('it allows super admin to add a new event', () => {
    cy.location()
    cy.get('#location-search').should('have.value', 'Silicon Valley')
    cy.signup('andrew@fi.co', 'secret123') // as super admin
    cy.get('#nav_wrap')
      .contains('Courses')
      .click() // clicks on courses
    cy.get('#course_flag').select('Engineer') // select the course flag
    cy.contains('Add a Recruiting Event').click() // creates a new recruiting event
    cy.get('body').get('#main_message') // to check the creation was successful
  })
})
