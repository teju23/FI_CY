describe('App initialization',()=>{
  beforeEach(function(){
    cy.visit('/');
  })
  it("allows user to set location",()=>{ 
    cy.get('#location-search').type('Silicon Valley');
    cy.wait(5000);
    cy.get('.ui-corner-all> li').first().click();
    cy.wait(1000);
    cy.get("#location-search").should("have.value","Silicon Valley");
  }),
  it("allows user to register",()=>{
    cy.get(".btn-transparent").focus().click({ force: true });
    cy.get(".footer-action").contains("Register").should('have.attr', 'href','/join').click();
  }),
  it("allows user to recover the password",()=>{ 
    cy.get(".btn-transparent").focus().click({ force: true });//clicks on Sign In
    cy.get(".footer-action").contains("Recover").should('have.attr', 'href', '#').click();
    cy.get('#password-reset-form').within(($form)=>{
      cy.get("#user_email").type('teju@codeastra.com');
      cy.get('.btn').click(); 
    })
    cy.get("#main_message");
  })
  // it("allows us to visit and check the email verification",()=>{
  //   cy.visit("https://localhost:1080");
  //   cy.get("#messages >tr").last().focus();
  // }) // To check the email but found error to visit page
  it("allows user to go from recover form to sign in form", () => {
    cy.get(".btn-transparent").focus().click({force: true}); //clicks on Sign In
    cy.get(".footer-action").contains("Recover").should('have.attr', 'href', '#').click();
    cy.get('#password-reset-form')
    cy.get('.toggle-signin-password-form').last().click();
  })
  it("allows user to go from recover form to register", () => {
    cy.get(".btn-transparent").focus().click({
      force: true
    }); //clicks on Sign In
    cy.get(".footer-action").contains("Recover").should('have.attr', 'href', '#').click();
    cy.get('#password-reset-form');
    cy.contains('Register').should("have.attr",'href',"/join").click({force:true});
    cy.url().should('eq', "http://localhost:3000/join");
  })
  it("doesnot allow the worng email id's or unregistered email id's to recover password",()=>{
    cy.get(".btn-transparent").focus().click({ force: true });//clicks on Sign In
    cy.get(".footer-action").contains("Recover").should('have.attr', 'href', '#').click();
    cy.get('#password-reset-form').within(($form) => {
      cy.get("#user_email").type('teju@astra.com');//new email
      cy.get('.btn').click();
    })
    cy.contains("Please Register...");
    cy.url().should("eq", "http://localhost:3000/join");
  }),
  it("allows the user to apply for the program",()=>{
    cy.get(".home-hgroup .btn").focus().click();
    cy.url().should("eq","http://localhost:3000/join");
    cy.form();
  }),
  it("allows to click ",()=>{
    cy.get(".container .btn .text").last().click();
    cy.url().should("eq","http://localhost:3000/join");
    cy.go('back');
    cy.get(".call-to-action .btn").focus().click();
   
    cy.get('.main-footer').contains('Press').click();
    cy.get('.main-footer').contains('Partners').click();
    cy.get('.main-footer').contains('Insights').click();
    cy.get('.main-footer').contains('Events').click();
    cy.get('.main-footer').contains('FAQ').click();
    
  }),
  // it("allows user to apply as a lead",()=>{
    
  //   cy.get('.main-footer').contains('Lead a Chapter').click();
  //   cy.get('.text-center .btn').click(); //apply as a lead
  //   cy.get(":nth-child(1) > #first_name").type("Lead");
  //   cy.get(":nth-child(1) > :nth-child(2) > #first_name").type("object");
  //   cy.get('#email_address').type('lead@test.com');
  //   cy.get('#linkedin_website').type('lead@biopic.com');
  //   cy.get('input[name="lead[city]"]').type('Boston');
  //   cy.contains("Submit").click();
  //   cy.contains("Thank you for applying to be a Local Leader.")
  // })
  it("allows user to click support",()=>{
    cy.get(".main-footer").contains("Startup Resources").should('have.attr','href','/vault').click();
    cy.go('back');
    cy.get('.main-footer').contains('Contact Us').should('have.attr','href','/support').click();
    cy.go('back');
    cy.get('.main-footer').contains('Agreements').should('have.attr', 'href', '/agreements').click();
    cy.go('back');
    cy.get('.main-footer').contains('Sponsor Us').should('have.attr', 'href', '/sponsor').click();
    cy.go('back');
    cy.get('.main-footer').contains('Jobs').should('have.attr','href','/jobs').click();
    cy.go('back');
  }), 
  it("allows user to check mentors",()=>{
    cy.get('.home-mentors').contains('More Mentors').click();
    cy.url().should('eq', "http://localhost:3000/mentors");
  })
  it("allows user to see graduates page",()=>{
    cy.contains('Graduates').should('have.attr','href','/graduates').click();
  })
})




