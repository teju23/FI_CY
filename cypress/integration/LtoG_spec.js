describe("journey from lead to graduate",()=>{
  let password = "secret123";
  let email = "lg@gm.co";
  beforeEach(()=>{
    cy.visit('/');
  }),
  afterEach(()=>{
    cy.contains('Logout').click({ force: true });
  })
  it("allows user to register",()=>{
    
    cy.location();
    cy.wait(1000);
    cy.contains('Join').click({ force: true });
    cy.wait(1000);
    cy.get('body').then(($body) => {
      if ($body.text().includes('See the full list')) {
        cy.form(email);
        //When the semester is not available for that location
      } else if ($body.text().includes('Unfortunately, your city')) {
        cy.form(email);
      } else {
        cy.form(email);
        cy.get("#password").type(password);
        //When the semester is available at the location
      }
    }),
    cy.get(".registration-form").submit();
    cy.wait(1000);
    cy.get('#education').select('3');
    cy.get('#professional_experience').select('2');
    cy.get('#start_up_experience').select('1');
    cy.get('#idea_field_experience').select('1');
    cy.get('#working_hrs_on_idea').select('1');
    cy.get('#team_size').select( '4');
    cy.get('#primary_skill').select('1');
    cy.get('#field_2').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
    cy.get('#gender').select('4');
    cy.get('#phone_number').type('9999999999');
    cy.get('#linkedin_website').type('expert@linked.co');
    cy.get('input[name="company[name]"]').type('justAName');
    cy.get('.select').last().select('Meetup');
    cy.get('input[name="user[source_1]"]').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
    cy.get('input[value="SUBMIT APPLICATION"]').click();
    cy.wait(1000);
    cy.contains('Congratulations! See the next steps below.');
  }),
  it('allows admin to accept the applied user',()=>{
    cy.signup('admin@fi.co', 'secret123');
    cy.contains('Enroll').should('have.attr','href','/admin/enrollment?sort%5Bstatus%5D=Accepted&type=Accepted').click();
    cy.wait(1000);
    cy.get('.admin_select').first().select('Applied');
    cy.wait(1000);
    cy.get('.information-check-tool').siblings('a').last().invoke('text').should('include','Teju');
    cy.get('.information-check-tool').get('td [id="new_status"]').last().select('Accepted');
    cy.wait(1000);
    cy.get('.information-check-tool').get('td [id="new_status"]').last().should('have.value','Accepted');
    cy.get('table > tbody > tr').last().children('td').eq(6).find('input[type="submit"]').click();
  })
  it('allows to know the applied state changed to accepted',()=>{
    cy.signup(email,password);
    cy.url().should('eq','http://localhost:3000/join');
    cy.contains('Step 1: Pay the Course Fee');//only for accepted founders the course fee will be asked
  }),
  it('allows admin to make the accpeted founder to graduated',()=>{
    cy.signup('admin@fi.co', 'secret123');
    cy.contains('Enroll').should('have.attr', 'href', '/admin/enrollment?sort%5Bstatus%5D=Accepted&type=Accepted').click();
    cy.wait(1000);
    cy.get('.admin_select').first().select('Accepted');
    cy.wait(1000);
    cy.get('.information-check-tool').siblings('a').last().invoke('text').should('include','Teju');
    cy.get('.information-check-tool').get('td [id="new_status"]').last().select('Graduated');
    cy.wait(1000);
    cy.get('table > tbody > tr').last().children('td').eq(6).find('input[type="submit"]').click();
  }),
  it('allows to know the accepted founder is graduated',()=>{
    cy.signup(email, password);
    cy.get('body').then(($body) => {
      ($body.text().includes('Graduates, like you, are the backbone of the Founder Institute.'))
    });
    cy.contains('Go to New Site').click();
  })
})  