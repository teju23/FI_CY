describe('visit page as Admin', function () {
  beforeEach(function () {
    cy.visit('/')
    cy.get('.portfolio-value').scrollIntoView()
  }),
  it('visits the app', () => {
    cy.signup('admin@fi.co', 'secret123') // correct credentials
    cy.contains('Go to New Site') // for admin
    cy.contains('Logout').click()
  }),
  it('doesnot allow the user with incorrect credentials to login', () => {
    cy.signup('admin@fi.co', 'teju1234', true) // wrong password
    cy.get('.portfolio-value').scrollIntoView()
    cy.signup('admin.co', 'secret1234', true) // unregistered or wrong mail ID
    cy.get('.portfolio-value').scrollIntoView()
    cy.signup('@@@', '#243', true) // with incorrect credentials
  })
})
