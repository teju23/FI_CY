describe('it allows admin to create a new semester', () => {
  beforeEach(function () {
    cy.visit('/')
    cy.get('.portfolio-value').scrollIntoView()
  }),
  it('Admin creates a new semester', () => {
    cy.signup('superadmin@fi.co', 'secret123')
    cy.contains('New Semester')
      .should('have.attr', 'href', '/admin/new_semester')
      .click({ force: true })
    cy.get('#city').select('Boston')
    cy.get('#semester_time_zone')
      .select('America/Caracas')
      .should('have.value', '(GMT-04:00) America/Caracas')
    cy.get('semester_country_code').select('BS')
    cy.get('input[value="create"]').click({ force: true })
    cy.get('body').then($body => {
      $body.text().includes('Launched Boston')
    })
    cy.logout()
  })
})
