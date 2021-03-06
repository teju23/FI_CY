describe("join in as a Founder", () => {
  it("join as founder with correct credentials", () => {
    cy.server();
    cy.visit('/');
    let password = "secret123";
    cy.location();
    cy.wait(1000);
    cy.contains('Join').click({force: true});
    cy.wait(1000);
    cy.get('body').then(($body) => {
      if ($body.text().includes('See the full list')) {
        cy.form("join@gm.co");
        //When the semester is not available for that location
      } else if ($body.text().includes('Unfortunately, your city')){
        cy.form("join@gm.co");
      } else {
        cy.form("join@gm.co");
        cy.get("#password").type(password);
        //When the semester is available at the location
      }
    })
    cy.get(".registration-form").submit();
    cy.wait(1000);
    cy.contains('Application Questions');
    cy.contains("Logout").click();
  })
});