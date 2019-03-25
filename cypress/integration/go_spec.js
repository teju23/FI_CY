describe('it allows add a user using Go page', () => {
  beforeEach(function () {
    cy.visit('/go')
  }),
  it('Register a user using go page', () => {
    cy.get('#id').select('-- Select One --')
    cy.get(':nth-child(2) > :nth-child(1) > .input').type('NewUser')
    cy.get(':nth-child(2) > :nth-child(2) > .input').type('LastName')
    cy.get(':nth-child(3) > :nth-child(1) > .input').type('newUser@email.com')
    cy.get(':nth-child(3) > :nth-child(2) > .input').type('4676868768468')
    cy.contains('Register to this event').click()
    cy.contains('NewUser LastName is Registered for Event')
  })
})
