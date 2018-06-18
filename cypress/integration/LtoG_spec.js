describe("journey from lead to graduate",()=>{
  it("allows user to register",()=>{
    cy.visit('/');
    let password = "secret123";
    cy.get('#location-search').type('Silicon Valley').should('have.value', 'Silicon Valley');
    cy.get('.ui-autocomplete .ui-corner-all', { timeout: 10000 });
    cy.get('.ui-corner-all> li').first().click();
    cy.wait(1000);
    cy.contains('Join').click({ force: true });
    cy.wait(1000);
    cy.get('body').then(($body) => {
      if ($body.text().includes('See the full list')) {
        cy.form();
        //When the semester is not available for that location
      } else if ($body.text().includes('Unfortunately, your city')) {
        cy.form();
      } else {
        cy.form();
        cy.get("#password").type(password);
        //When the semester is available at the location
      }
    })
    cy.window().then(win => win.$('#global-apply').prop('disabled', false));
    cy.get(".registration-form").submit();
    cy.wait(1000);
    cy.get('#education').select('have.value','3');
    cy.get('#professional_experience').select('have.value','2');
    cy.get('#start_up_experience').select('have.value','1');
    cy.get('#idea_field_experience').select('have.value','1');
    cy.get('#working_hrs_on_idea').select('have.value', '1');
    cy.get('#team_size').select('have.value', '4');
    cy.get('#primary_skill').select('have.value', '1');
    cy.get('#field_2').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
    cy.get('#gender').select('have.value','4');
    cy.get('#phone_number').type('9999999999');
    cy.get('#linkedin_website').type('expert@linked.co');
    cy.fixture('/home/codeastra/Desktop/image.jpg').as('logo')
    cy.get('input[type=file]').then(($input)=>{
      return Cypress.Blob.base64StringToBlob(this.logo, "image/png").then((blob) => {
        $input.fileupload("add", { files: blob })
      })
    });
    cy.get('input[name="company[name]"]').type('justAName');
    cy.get('.select').select('have.value','Meetup');
    cy.get('input[name="user[source_1]"]').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
    cy.get('input[value="SUBMIT APPLICATION"]').click();
    cy.wait(1000);
    cy.contains('Successfully updated.');
    cy.contains("Logout").click();
  }),
  it('allows user ',()=>{
    cy.visit('/');
    cy.signup('sick@teju.co','teju');
    cy.visit('http://localhost:3000/join');
    cy.fixture('image/logo.jpg').as('logo')
    cy.get('input[type=file]').then(($input) => {
      return Cypress.Blob.base64StringToBlob(this.logo, "image/jpg").then((blob) => {
        $input.fileupload("add", { files: blob })
      })
    });
  })
})