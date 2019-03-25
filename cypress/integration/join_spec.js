describe('join in as a Founder', () => {
  it('join as founder with correct credentials', () => {
    cy.server()
    cy.visit('/')
    cy.get('.portfolio-value').scrollIntoView()
    let password = 'secret123'
    cy.location()
    cy.contains('Join').click({ force: true })
    cy.get('body').then($body => {
      if ($body.text().includes('The Silicon Valley Founder Institute')) {
        cy.form() // When the semester is not available for that location
      } else if ($body.text().includes('Geolocation is not perfect')) {
        cy.form()
      } else {
        cy.form()
        cy.get('#password').type(password) // When the semester is available at the location
      }
    })
    // cy.get('.recaptcha-checkbox-checkmark').click()
    cy.get('.registration-form').submit({ force: true })
    cy.contains('Application Questions')
    cy.contains('Logout').click()
  })
})
