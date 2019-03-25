describe('it allows the admin to login and use dashboard', () => {
  beforeEach(() => {
    cy.visit('/') // visits th ewebsite
    cy.get('.who-we-help').scrollIntoView() // scrolls down to view the nav bar
  })
  afterEach(() => {
    cy.contains('Logout').click({ force: true }) // logs out after each block
  })
  it('allows to login as Admin', () => {
    cy.signup('admin@fi.co', 'secret123') // as admin
    cy.contains('Go to New Site').click()
    cy.contains('Apply to the Program')
    cy.get('.who-we-help').scrollIntoView()
    cy.contains('Go to Dashboard') // for admin
  }),
  it('allows to login as Mentor', () => {
    cy.signup('mentor@fi.co', 'secret123') // as mentor
    cy.contains('Mentor Dashboard') // for mentor
    cy.contains('Go to Dashboard')
  }),
  it('allows to login as Graduated', () => {
    cy.signup('graduated_founder@fi.co', 'secret123') // as Graduated
    cy.contains('Welcome,')
    cy.contains('Go to New Site').click() // for Graduated
    cy.contains('Go to Dashboard')
  }),
  it('allows to login as applied_founder', () => {
    cy.signup('applied_founder@fi.co', 'secret123') // as applied_founder
    cy.contains('Go to Dashboard').should('not.exist')
  }),
  it('allows to login as accepted founder', () => {
    cy.signup('accepted_founder@fi.co', 'secret123') // logs in as accepted_founder
    cy.contains('Pay the Course Fee')
  })
})
