describe("join in as a Founder", () => {
  it("join as founder with correct credentials", () => {
    cy.server();
    cy.visit('/');
    let password = "secret123";
     cy.get('#location-search').type('Silicon Valley').should('have.value','Silicon Valley');
    cy.wait(15000);

     cy.get('.ui-autocomplete .ui-corner-all');
     cy.get('.ui-corner-all> li').first().click();
    cy.wait(1000);
     
    cy.contains('Join').click({force:true});

    cy.get('body').then(($body) => {
      if ($body.text().includes('See the full list')) {
        cy.form();
        //When the semester is not available for that location
      } else if ($body.text().includes('Unfortunately, your city')){
        cy.form();
      } else {
        cy.form();
        cy.get("#password").type(password);
        //When the semester is available at the location
      }
    })
    cy.get('iframe').first().then(($iframe)=>{
      const doc = $iframe.contents();
      doc.find('button').click(()=>{
        console.log("clicked!!");
      })
      cy.wrap(doc.find('button').click({force: true}))
    })
    cy.get(".registration-form").submit();
 })
});